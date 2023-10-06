import { server } from "@/app/add-tasks/page";
import axios from "axios";

export const httpAxios = axios.create({
  baseURL: server,
});
