import { server } from "@/app/add-tasks/page";
import axios from "axios";

export const addTask = async (task) => {
  try {
    const { data } = await axios.post(`${server}/api/tasks`, task);
    return data;
  } catch (error) {}
};
