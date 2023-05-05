import { authCreate } from "./api";

const loginAdmin =async(payload)=>{
        console.log(payload)
        const res = await authCreate.post("/login",payload);
        // console.log(res.data)
        return res.data
}

export {
    loginAdmin
}
