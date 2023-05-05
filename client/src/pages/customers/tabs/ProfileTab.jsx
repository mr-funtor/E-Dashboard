import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

//components
import { CustomInput, CustomToast, LoaderScreen} from "../../../components";

//assets
import { SettingIcon } from "../../../constants/icons"
import CustomerPic from "../../../assets/images/idris.jpg";

// data handling
import { useQuery } from "@tanstack/react-query";
import { fetchCustomerProfile } from "../../../axios/CustomersAxios";

//tailwind
const styles={
    imgRing:`h-48 w-48 rounded-full border-2 
            border-gray-300 flex items-center 
            justify-center relative`,
    onlineIndicator:`h-4 w-4 bg-green-500 rounded-full absolute top-7 right-3`,
    profileTab:`flex items-center mr-10 py-3`,
    tabFocused:`border-b-2 border-keystonePrimaryBlue`,
    tabText:`text-sm`,
}


const ProfileTab =()=>{
    const params = useParams()
    const navigate = useNavigate();
    const [errorMessage, setErrormessage] = useState("")

    const {isFetching,isError,error,data,isSuccess}= useQuery({
        queryKey:[`customer-${params.id}`], 
        queryFn:()=> fetchCustomerProfile(params.id),
    })

    useEffect(()=>{
        if(!isFetching && isError){
            console.log(error.response.data.message,"ERRORE")
            setErrormessage(error.response.data.message)
        }
    },[isFetching])

    console.log(data?.data)

    if(isFetching){
        return <LoaderScreen/> 
    }


    return(
    <div>
        <CustomToast
            ifError
            message={errorMessage}
            setMessage={setErrormessage}
        />
        {isSuccess && <div className="mt-8 flex ">
            <div className="w-full">
                <div className={styles.imgRing}>
                    <div className="w-[85%] h-[85%] rounded-full overflow-hidden bg-gray-300 ">
                        <img 
                            src={CustomerPic}
                            alt="customer profile picture"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>

                <div className=" mt-[60px]">
                    

                </div>
            </div>

            <div className="w-full mx-10 ">
            <CustomInput
                        labeltext={"Customer's Name"}
                        labelstyle={`mb-0 text-gray-400`}
                        containerstyle={`border-2 border-gray-200 p-2 py-0 mb-6`}
                        inputcasestyle={`border-0 h-8`}
                        inputstyle={`pl-0 text-md bg-white`}
                        defaultValue={data.data.name}
                        disabled
                    />

                    <CustomInput
                        labeltext={"Username"}
                        labelstyle={`mb-0 text-gray-400`}
                        containerstyle={`border-2 border-gray-200 p-2 py-0 mb-6`}
                        inputcasestyle={`border-0 h-8`}
                        inputstyle={`pl-0 text-md bg-white`}
                        defaultValue={data.data.username}
                        disabled
                    />

                    <CustomInput
                        labeltext={"Phone Number"}
                        labelstyle={`mb-0 text-gray-400`}
                        containerstyle={`border-2 border-gray-200 p-2 py-0 mb-6`}
                        inputcasestyle={`border-0 h-8`}
                        inputstyle={`pl-0 text-md bg-white`}
                        defaultValue={data.data.mobileNumber}
                        disabled
                    />
                <CustomInput
                    labeltext={"Email"}
                    labelstyle={`mb-0 text-gray-400`}
                    containerstyle={`border-2 border-gray-200 p-2 py-0 mb-6`}
                    inputcasestyle={`border-0 h-8`}
                    inputstyle={`pl-0 text-md bg-white`}
                    defaultValue={data.data.email || ""}
                    disabled
                />

                
            </div>

            <div className="w-full ">
                <CustomInput
                    labeltext={"ID"}
                    labelstyle={`mb-0 text-gray-400`}
                    containerstyle={`border-2 border-gray-200 p-2 py-0 mb-6`}
                    inputcasestyle={`border-0 h-8`}
                    inputstyle={`pl-0 text-md bg-white`}
                    defaultValue={data.data.customerId}
                    disabled
                />
                <CustomInput
                    labeltext={"Registered"}
                    labelstyle={`mb-0 text-gray-400`}
                    containerstyle={`border-2 border-gray-200 p-2 py-0 mb-6`}
                    inputcasestyle={`border-0 h-8`}
                    inputstyle={`pl-0 text-md bg-white`}
                    defaultValue="03-12-2022"
                    disabled
                />

                <CustomInput
                    labeltext={"Number of Transactions"}
                    labelstyle={`mb-0 text-gray-400`}
                    containerstyle={`border-2 border-gray-200 p-2 py-0 mb-6`}
                    inputcasestyle={`border-0 h-8`}
                    inputstyle={`pl-0 text-md bg-white`}
                    defaultValue="20"
                    disabled
                />
                
                <CustomInput
                    labeltext={"Last Transaction"}
                    labelstyle={`mb-0 text-gray-400`}
                    containerstyle={`border-2 border-gray-200 p-2 py-0 mb-6`}
                    inputcasestyle={`border-0 h-8`}
                    inputstyle={`pl-0 text-md bg-white`}
                    defaultValue="03-12-2022"
                    disabled
                />

            </div>
        </div>}

    </div>
    )
}

export default ProfileTab