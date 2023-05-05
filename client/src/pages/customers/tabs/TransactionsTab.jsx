import { useEffect, useState } from "react"

// components
import { CustomInput, CustomButton, LoaderScreen } from "../../../components"

// assets
import { SearchIcon,ChevronLeftIcon,ChevronRightIcon } from "../../../constants/icons";

// data handling
import { fetchCustomerTransactions } from "../../../axios/CustomersAxios"

const dummyData=[
    {
        product:"Silk Scarf",
        productCode:"ru-782",
        amount:"500.00",
        transactionId:"udf-448",
        date:"20-01-2023",
        customerId:"347893",
        customerName:"Ali, Matthew Ayogu"
    },
    {
        product:"Black Pen",
        productCode:"pi-402",
        amount:"500.00",
        transactionId:"ydg-409",
        date:"18-02-2023",
        customerId:"347893",
        customerName:"Ali, Matthew Ayogu"
    },
]

const TransactionsTab =()=>{
    const [loading, setLoading] = useState(false)
    
    //populate the Table Head for the table
    const tableHeadData=["Product","Product Code","Amount", "Transation ID","Date"]
    const tableHeadComponents=[];
    tableHeadData.forEach((data,index)=>{
        tableHeadComponents.push(<th 
            className={index === 0 ? `text-left py-4 pl-5 font-normal` :`text-left py-4 font-normal`}
            key={index}
            >{data}</th>)
    })


    return(
    <div className="mt-10">
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

        <div className="w-full overflow-scroll mt-10 pb-8 border-y-2 border-gray-200">
            <table className="w-full ">
                <colgroup>
                    <col className="w-fit"/>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                </colgroup>
                <thead>
                    <tr>
                        {tableHeadComponents}
                    </tr>
                </thead>
                <tbody>
                {
                    dummyData.map((data,index)=>{
                        const {product,productCode,amount,transactionId,date}= data;
                        return(
                            <tr 
                                className={index % 2 === 0 ? `bg-white py-5 h-10 font-light text-sm` :`bg-gray-100 py-5 h-11 font-light text-sm`}
                                key={index}
                            >
                                <td className="pl-5 py-5">{product}</td>
                                <td>{productCode}</td>
                                <td>{amount}</td>
                                <td>{transactionId}</td>
                                <td className="pr-5">{date}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default TransactionsTab