import axios from "axios";

const instance = axios.create({
  baseURL: "https://amazon-kk16.onrender.com",
});

export default instance;
