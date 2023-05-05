import Axios from "axios";

const BASE_URL = "https://us-central1-music-stream-4fde8.cloudfunctions.net/app";



export const authCreate = Axios.create({
  baseURL: BASE_URL, 
  headers:{
    "Access-Control-Allow-Origin": "*",
    "Content-Type":"application/json"
  }
});











