import { authCreate } from "./api";
import axios from "axios";

const newBaseCreate= axios.create({

})

const fetchTransactions =(payload)=>{

   return authCreate.get("/posts");
}

export {
    fetchTransactions
}
