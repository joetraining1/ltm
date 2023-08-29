import axios from "axios";
import Cookies from "js-cookie";
import useAuth from "../hooks/useAuth";

const ApiClient = axios.create({
  // change to ip to try
  // home ip  192.168.100.11
  baseURL: `http://localhost:3030/`,
  // baseURL: `http://192.168.100.11:3030/`,
});

ApiClient.interceptors.request.use((config) => {
  const token = Cookies.get('accessToken');
  // console.log(token)

  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

ApiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    
    // console.log(response)
    throw error;
  }
);

export default ApiClient;
