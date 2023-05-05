import { authCreate } from "./api";


const fetchCustomers =()=>{

   return authCreate.get("/customers");
}

const fetchCustomerProfile =(id)=>{
   console.log(id, "IDEN")

   return authCreate.get(`/customers/${id}`);
}

const fetchCustomerTransactions =(payload)=>{

   return authCreate.get("/posts");
}

const searchingSpecificCustomer =(payload)=>{
   
   return authCreate.get("/posts");
}

const editCustomerDetails =(payload)=>{

   return authCreate.post("/posts",payload);
}

export {
    fetchCustomers,
    fetchCustomerProfile,
    fetchCustomerTransactions,
    editCustomerDetails,
    searchingSpecificCustomer
}
