import { useEffect, useState } from "react";
import { fetchTransactions } from "../axios/DashboardAxios";

//components
import {
    TransactionRange,
    TopNav,
    DoughnutChart,
    LineChart,
    PieChart
} from "../components";
import LoaderScreen from "../components/LoaderScreen";

//assets
import {
    ArrowUpGreenIcon,
    ArrowDownOrangeIcon,
 } from "../constants/icons";


const Dashboard=()=>{


    return(
        <>
            <TopNav/>

            <div className="min-h-screen bg-gray-50 w-full py-4 px-8">
                <TransactionRange/>

                <div className="bg-white mt-14 p-9 rounded-md">
                    <div className="mb-24">
                        <div className="w-[67%] flex justify-between">
                            <div >
                                <h2 className="font-bold text-monroePurple">Transactions Value Overview</h2>
                                <p className="font-light text-gray-400 text-sm">Overview of Hourly analytics</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center mr-10">
                                    <div className="h-4 w-4 bg-teal-500 rounded-full"></div>
                                    <p className="text-teal-500 text-sm ml-2">Accepted goods</p>
                                </div>
                                <div className="flex items-center">
                                    <div className="h-4 w-4 bg-sky-500 rounded-full"></div>
                                    <p className="text-sky-500 text-sm ml-2">Rejected goods</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex mt-7">
                            <div className="w-[70%] ">
                                <div className="h-[350px]">
                                    <LineChart
                                    configLine1={{
                                        borderColor:["rgba(56, 116, 203, 1)"],
                                        borderWidth:2,
                                        tension:0.3,
                                        backgroundColor:["rgba(171, 205, 255, 0.5)"],
                                        fill:'shape',
                                        }}  
                                    configLine2={{
                                        borderColor:["rgba(30, 189, 113, 1)"],
                                        borderWidth:2,
                                        tension:0.3,
                                        }}  
                                    />
                                </div>
                            </div>

                            <div className="w-[30%] p-5 ml-5 shadow-lg rounded-md">
                                <p className="text-monroePurple">Successful Transactions</p>
                                <div className="h-[90%] flex justify-center items-center">
                                    <div className="w-[150px]">
                                        <DoughnutChart
                                        config={{
                                            backgroundColor:["rgba(119, 203, 111, 1)","rgba(0, 37, 97, 1)"],
                                            }}  
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[70%] flex justify-center">
                            <div className="mr-10">
                                <p className="text-xs font-light mb-1">Total Accepted Goods</p>
                                <div className="flex items-center">
                                    <img
                                        src={ArrowUpGreenIcon}
                                        alt="arrow icon"
                                        className="bg-green-100 p-2 rounded-full h-6"
                                    />
                                    <p className="text-[11px] ml-2">6,128,237,217.87 - (45392)</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-xs font-light mb-1">Total Rejected Goods</p>
                                <div className="flex items-center">
                                    <img
                                        src={ArrowDownOrangeIcon}
                                        alt="arrow icon"
                                        className="bg-failedOrange-200 p-2 rounded-full h-6"
                                    />
                                    <p className="text-[11px] ml-2">6,128,237,217.87 - (45392)</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div>
                        <div className="w-[67%] flex justify-between">
                            <div >
                                <h2 className="font-bold text-monroePurple">Successful vs Failed Logon</h2>
                            </div>
                        </div>

                        <div className="flex mt-7">
                            <div className="w-[70%] ">
                                <div className="h-[350px]">
                                    <LineChart
                                    configLine1={{
                                        borderColor:["rgba(196, 196, 196, 1)"],
                                        borderWidth:2,
                                        tension:0.3,
                                        }}  
                                    configLine2={{
                                        borderColor:["rgba(171, 205, 255, 0.8)"],
                                        borderWidth:2,
                                        tension:0.3,
                                        }}  
                                    />
                                </div>
                            </div>

                            <div className="w-[30%] p-5 ml-5 shadow-lg rounded-md">
                                <p className="text-monroePurple">Failed Transactions</p>
                                <div className="h-[90%] flex justify-center items-center">
                                    <div className="w-[150px]">
                                        <PieChart
                                        config={{
                                            backgroundColor:["rgba(119, 203, 111, 1)","rgba(0, 37, 97, 1)"],
                                            }}  
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Dashboard;