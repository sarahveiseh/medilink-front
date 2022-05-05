import { toast } from "react-toastify";

function useErrorHandler() {
  const handleFailedRequest = (err) => {
    //401
    const statusCode = Number(err?.response?.status);

    const messageError = err?.response?.data?.message;

    const isGetRequest = err?.config?.method === "GET";

    //500
    if (statusCode > 499) {
      if (isGetRequest) return;
      toast.error("بروز خطا در اتصال به سرور");
      return;
    }
    if (statusCode === 403) {
      toast.error("دسترسی غیر مجاز");
      return;
    }
    if (statusCode === 400) {
      //bad request
      toast.error(messageError);
      return;
    }

    //others
    if (isGetRequest) return;
    toast.error(err?.data?.message || "بروز خطا در اتصال به سرور");
  };
  return { handleFailedRequest };
}

export default useErrorHandler;
