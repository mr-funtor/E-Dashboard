import { authCreate } from "./api";


const fetchAllTransactions =()=>{

   return authCreate.get("/transactions");
}

export {
    fetchAllTransactions,
}
