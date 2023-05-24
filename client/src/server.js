import axios from "axios";

const server = axios.create({
  baseURL: "https://secure-block-wheat.vercel.app/",
});

export default server;
