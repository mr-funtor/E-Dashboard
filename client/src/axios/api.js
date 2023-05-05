import Axios from "axios";

const BASE_URL = "http://localhost:4004";



export const authCreate = Axios.create({
  baseURL: BASE_URL, 
  headers:{
    "Access-Control-Allow-Origin": "*",
    "Content-Type":"application/json"
  }
});











