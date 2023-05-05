import { useEffect, useState } from "react";

// router
import { Link } from "react-router-dom";

// components
import {
    TopNav,
    CustomInput, 
    CustomButton,
    LoaderScreen, 
    CustomToast
} from "../../components";

// assets
import { SearchIcon,ChevronLeftIcon,ChevronRightIcon } from "../../constants/icons";

// data handling
import { useQuery } from "@tanstack/react-query";
import { fetchCustomers, searchingSpecificCustomer } from "../../axios/CustomersAxios";



const CustomersPage=()=>{
    const [errorMessage, setErrormessage] = useState("")
    
    const {isFetching,isError,error,data,isSuccess}= useQuery({
        queryKey:["all-customers"], 
        queryFn:()=> fetchCustomers(),
    })

    // for the table
    const tableHeadData=["Name", "UserName", "Mobile Number", "Customer ID",
    "Status", "Options"]
    const tableHeadComponents=[];
    tableHeadData.forEach((data,index)=>{
        tableHeadComponents.push(<th 
            className={index === 0 ? `text-left py-4 pl-5 font-normal` :`text-left py-4 font-normal`}
            key={index}
            >{data}</th>)
    })


    useEffect(()=>{
        if(!isFetching && isError){
            console.log(error.response.data)
            setErrormessage(error.response.data.message)
        }
    },[isFetching])



    if (isFetching) return <LoaderScreen/>

    return(
        <>
        <TopNav
            rightTitle={"Customers"}
        />

        <div className="min-h-screen bg-gray-50 w-full py-5 px-8">
            <CustomToast
                ifError
                message={errorMessage}
                setMessage={setErrormessage}
            />
            <div className=" bg-white py-16 px-5 rounded-md">
                <div className="flex items-center justify-between ">
                    <CustomInput
                        placeholder={"Search Username or Mobile No."}
                        containerstyle={`w-[35%]`}
                        inputcasestyle={`h-10`}
                        lefticon={SearchIcon}
                    />

                    <div className="flex w-[30%]">
                        <CustomButton
                            buttonText={"CSV"}
                            containerStyle={`bg-monroePurple rounded-r-none mr-1 h-10`}
                        />
                        <CustomButton
                            buttonText={"Excel"}
                            containerStyle={`bg-monroePurple rounded-none h-10`}
                        />
                        <CustomButton
                            buttonText={"PDF"}
                            containerStyle={`bg-monroePurple rounded-l-none ml-1 h-10`}
                        />
                    </div>

                </div>

                <div className="mt-10 pb-8 border-y-2 border-gray-200">
                    <table className="w-full ">
                        <colgroup>
                            <col className="w-fit"/>
                            <col />
                            <col />
                            <col />
                            <col className="w-36"/>
                            <col className="w-24"/>
                        </colgroup>
                        <thead>
                            <tr>
                                {tableHeadComponents}
                            </tr>
                        </thead>
                        <tbody>
                            {isSuccess && data.data.map((data,index)=>{
                                const {name, username, mobileNumber,customerId,isActive} = data;
                                return(
                                    <tr 
                                        className={index % 2 === 0 ? `bg-white h-10 font-light text-sm` :`bg-gray-100 h-10 font-light text-sm`}
                                        key={customerId}
                                    >
                                        <td className="pl-5 py-4">{name}</td>
                                        <td>{username}</td>
                                        <td>{mobileNumber}</td>
                                        <td>{customerId}</td>
                                        <td > 
                                            <CustomButton
                                                buttonText={isActive ? "Active" : "Inactive"}
                                                containerStyle={isActive ?`h-8 w-[80%] rounded-sm bg-green-500` : `h-8 w-[80%] rounded-sm bg-[#F3BA00]`}
                                            />
                                        </td>
                                        <td>
                                            <Link to={`/customers/${customerId}/profile`}>
                                                <CustomButton
                                                    buttonText={"Manage"}
                                                    containerStyle={`bg-transparent text-blue-300 w-fit`}
                                                />
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
        </>
    )
}

export default CustomersPage;