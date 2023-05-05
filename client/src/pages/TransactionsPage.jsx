import { useEffect, useState } from "react";

// components
import { 
    CustomButton, 
    CustomInput,
    TopNav, 
    TransactionRange, 
    LoaderScreen
} from "../components";

// assets
import { SearchIcon} from "../constants/icons";

// data handling
import { fetchAllTransactions } from "../axios/TransactionsAxios";
import { useQuery } from "@tanstack/react-query";



const Transactions=()=>{
    
    //populate the Table Head for the table
    const tableHeadData=["Product","Product Code","Amount", "Transation ID","Date"]
    const tableHeadComponents=[];
    tableHeadData.forEach((data,index)=>{
        tableHeadComponents.push(<th 
            className={index === 0 ? `text-left py-4 pl-5 font-normal` :`text-left py-4 font-normal`}
            key={index}
            >{data}</th>)
    })

    const {isFetching,isError,error,data,isSuccess}= useQuery({
        queryKey:[`all-transactions`], 
        queryFn:()=> fetchAllTransactions(),
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
        <>
           <TopNav 
                leftTitle={"Transactions"}
            />

            <div className="min-h-screen bg-gray-50 w-full py-4 px-8">
                <div className=" bg-white py-5 px-5 rounded-md">
                    <TransactionRange/>
                    
                    <div className="flex items-center justify-between mt-10">
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

                    <div className="w-full overflow-scroll mt-10 pb-8 border-y-2 border-gray-200">
                        <table className="w-full ">
                            <colgroup>
                                <col/>
                                <col/>
                                <col className="w-fit"/>
                                <col />
                                <col />
                            </colgroup>
                            <thead>
                                <tr>
                                    {tableHeadComponents}
                                </tr>

                            </thead>
                            <tbody>
                                {isSuccess && data.data.map((data,index)=>{
                                        const {product, productCode,amount,transactionId,date,customerId,customerName}= data;
                                        return(
                                            <tr
                                                className={index % 2 === 0 ? `bg-white py-5 h-10 font-light text-sm` :`bg-gray-100 py-5 h-11 font-light text-sm`}
                                                key={transactionId}
                                            >
                                                <td className="pl-5 py-5">{product}</td>
                                                <td>{productCode}</td>
                                                <td>{amount}</td>
                                                <td>{transactionId}</td>
                                                <td>{date}</td>
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

export default Transactions