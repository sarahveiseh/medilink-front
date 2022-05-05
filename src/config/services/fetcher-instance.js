import axios from "axios";

const baseURL = process.env["REACT_APP_BASE_URL_API"];

export const Axios = axios.create({
  baseURL,
  timeout: 12000,
});

Axios.interceptors.request.use(
  function (config) {
    // console.log(config);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);
