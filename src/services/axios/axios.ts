import toast from "react-hot-toast";
import axios from "axios";
import { getSession } from "next-auth/react";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/",
  withCredentials: true,
  /*   headers: {
    "Content-Type": "application/json",
  }, */
});

/* axiosInstance.interceptors.request.use(
  function (config) {
    const { data: session } = getSession();

    if (session?.id) {
      config.headers.Authorization = `Bearer ${session?.id}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 403) {
      toast.error("Unauthorized. Please log in.");
    }

    return Promise.reject(error);
  }
);

export { axiosInstance };
 */
export { axiosInstance };
