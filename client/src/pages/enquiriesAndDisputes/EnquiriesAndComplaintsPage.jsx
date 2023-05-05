import { CustomButton } from "../../components";
import { ChevronRightIcon, ChevronLeftIcon } from "../../constants/icons";


const EnquiriesAndComplaintsPage =()=>{

    //populate the Table Head for the table
    const tableHeadData=["Type", "Customer Id", "Name", "Email",
        "Phone No.", "Date", "Comment"];
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
                                            <td>080776544</td>
                                            <td>Oct 28 2022</td>
                                            <td>Please would you be restocking the green silk scarf</td>
                                        </tr>
                                    </tbody>
                                </table>
            </div>
        </div>
    )
}

export default EnquiriesAndComplaintsPage