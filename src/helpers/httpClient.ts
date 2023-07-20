import axios from "axios";

const HEADERS = {
  "Content-Type": "application/json",
};

export const getCustomHttpClient = (headers = {}, axiosParams = {}) => {
  const client = axios.create({
    baseURL: `http://localhost:8000/`,
    headers: {
      ...headers,
    },
    ...axiosParams,
  });

  return client;
};

export const HttpClient = getCustomHttpClient(HEADERS);
