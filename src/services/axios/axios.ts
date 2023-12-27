import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
  withCredentials: true,
});

export { axiosInstance };
