import { Axios } from "config/services/fetcher-instance";
import { UserContext } from "providers/user-provider";

import { useContext } from "react";
import useErrorHandler from "./use-error-handler";

export const useFetcher = (config) => {
  //create axios headers
  const axiosConfig = config;
  const { handleFailedRequest } = useErrorHandler();

  const { state: userState } = useContext(UserContext);

  //config headers

  axiosConfig.headers = {
    ...axiosConfig.headers,
    accept: "application/json",
    "Content-Type": config?.formData
      ? "multipart/form-data"
      : "application/json;charset=UTF-8",
    ...(config.useToken
      ? { Authorization: `Bearer ${userState?.user?.token}` }
      : null),
  };

  return (data = null) =>
    new Promise((resolve, reject) => {
      if (data) axiosConfig.data = data;
      if (data && axiosConfig.method === "GET") axiosConfig.params = data;

      //send request
      return Axios(axiosConfig)
        .then((res) => {
          //handle success
          if (res?.status > 199 && res?.status < 299) resolve(res?.data);
          else {
            handleFailedRequest(res);
            reject(res?.data);
            // handleFailedRequest(res)
          }
        })
        .catch((error) => {
          //handle unsuccess
          handleFailedRequest(error);
          reject(error?.response?.data);
        });
    });
};
