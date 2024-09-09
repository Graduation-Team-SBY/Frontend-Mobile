import axios from "axios";

export const instanceAxios = axios.create({
  // baseURL: "http://localhost:3000/"
  // baseURL: "https://a5cd-103-165-209-195.ngrok-free.app"
  baseURL: "http://35.197.155.134/",
});
