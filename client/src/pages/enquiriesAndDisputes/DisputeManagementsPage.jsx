import { ChevronRightIcon, ChevronLeftIcon } from "../../constants/icons";


const DisputeManagementsPage =()=>{
        //populate the Table Head for the table
        const tableHeadData=["Type", "Account No.", "Name", "Email",
        "Merchant Name", "Merchant Location", "Comment"];
    const tableHeadComponents=[];
    tableHeadData.forEach((data,index)=>{
        tableHeadComponents.push(<th 
            className={index === 0 ? `text-left py-4 pl-5` :`text-left py-4`}
            key={index}
            >{data}</th>)
    })

    return(
        <div>
            <div className="w-full overflow-scroll mt-10 pb-8 border-y-2 border-gray-200">
                <table className="w-[135%] ">
                                    <colgroup>
                                        <col/>
                                        <col/>
                                        <col className="w-fit"/>
                                        <col />
                                        <col />
                                        <col />
                                        <col className="w-[400px] pr-2"/>
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            {tableHeadComponents}
                                        </tr>

                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="pl-5">enquiry</td>
                                            <td>10033455566</td>
                                            <td>Olalekan Aminu</td>
                                            <td>olalekan134@gmail.com</td>
                                            <td>MTN</td>
                                            <td>Lagos</td>
                                            <td>I recently tried sending money to my friend, got debited 
                                            but the receiver was not credited</td>
                                        </tr>
                                    </tbody>
                                </table>
            </div>
            <footer className="mt-10 flex justify-between">
                <div>
                    <p className="text-gray-400">Showing <span>10 to 20</span> of <span>1240</span></p>
                </div>

                <div className="flex h-8">
                    <button className="border-2 border-gray-200  px-2 flex items-center">
                        <img src={ChevronLeftIcon} alt="Chevron Previous Icon" className="h-4"/>
                        <p className="ml-2 text-gray-400">Previous</p>
                    </button>
                    <p className="bg-keystonePrimaryBlue text-white w-6 h-full text-center flex items-center justify-center">{"2"}</p>
                    <button className="border-2 border-gray-200 px-2 flex items-center">
                        <p className="mr-2 text-gray-400">Next</p>
                        <img src={ChevronRightIcon} alt="Chevron Next Icon" className="h-4"/>
                    </button>
                    
                </div>
            </footer>
        </div>
    )
}

export default DisputeManagementsPage