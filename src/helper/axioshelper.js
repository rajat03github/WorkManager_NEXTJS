import axios from "axios";

export const server = "http://localhost:3000";

export const httpAxios = axios.create({
  baseURL: server,
});
