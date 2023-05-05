
//components
import { 
    CustomButton, 
    CustomInput, 
    SideNavbar, 
    RightContainer, 
    TopNav, 
    TransactionRange 
} from "../../components";

//assets
import { SearchIcon,ChevronLeftIcon,ChevronRightIcon } from "../../constants/icons";


const dummyData=[
    {
        name:"Ali, Matthew Ayogu", 
        username:"mathhew122", 
        amount:"2500.00",
        drAccount:"10025633",
        bank:"First Bank",
        type:"NIP",
        beneficiary:"AZEEZ OLADAPO AYOBAMI/31344556",
        narration:"Transportation",
        date:"Oct 28 2022 11-52-59 AM",
        reference:"FT234443339877",
        status:"Transaction successful",
        aplResp:"Successful",
   },
    {
        name:"Ali, Matthew Ayogu", 
        username:"mathhew122", 
        amount:"2500.00",
        drAccount:"10025633",
        bank:"First Bank",
        type:"NIP",
        beneficiary:"AZEEZ OLADAPO AYOBAMI/31344556",
        narration:"Transportation",
        date:"Oct 28 2022 11-52-59 AM",
        reference:"FT234443339877",
        status:"Transaction successful",
        aplResp:"Successful",
   },
]

const ProfileSearchPage=()=>{
    
    //populate the Table Head for the table
    const tableHeadData=["Name","Username","Amount", "Dr Account", "Bank", "Type",
    "Beneficiary", "Narration", "Date", "Reference", "Status", "AplResp"]
    const tableHeadComponents=[];
    tableHeadData.forEach((data,index)=>{
        tableHeadComponents.push(<th 
            className={index === 0 ? `text-left py-4 pl-5 font-normal` :`text-left py-4 font-normal`}
            key={index}
            >{data}</th>)
    })

    return(
        <div>
            <SideNavbar/>
            
            <RightContainer>
                <TopNav 
                    leftTitle={"Customer Details"}
                    leftSubTitle={"Registered on: Dec 25, 2021 12:00:00 AM"}
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
                                    containerStyle={`rounded-r-none mr-1 h-10`}
                                />
                                <CustomButton
                                    buttonText={"Excel"}
                                    containerStyle={`rounded-none h-10`}
                                />
                                <CustomButton
                                    buttonText={"PDF"}
                                    containerStyle={`rounded-l-none ml-1 h-10`}
                                />
                            </div>

                        </div>

                        <div className="w-full overflow-scroll mt-10 pb-8 border-y-2 border-gray-200">
                            <table className="w-[150%] ">
                                <colgroup>
                                    <col/>
                                    <col/>
                                    <col className="w-fit"/>
                                    <col />
                                    <col />
                                    <col className="w-14"/>
                                    <col className="w-36"/>
                                    <col />
                                    <col className="w-28"/>
                                    <col />
                                    <col className="w-28"/>
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
                                            const {name,username,amount,drAccount, bank,
                                                type, beneficiary,narration,date,reference,status,aplResp 
                                            }= data;
                                            return(
                                                <tr
                                                    className={index % 2 === 0 ? `bg-white py-5 h-10 font-light text-sm` :`bg-gray-100 py-5 h-11 font-light text-sm`}
                                                    key={index}
                                                >
                                                    <td className="pl-5 py-5">{name}</td>
                                                    <td>{username}</td>
                                                    <td>{amount}</td>
                                                    <td>{drAccount}</td>
                                                    <td>{bank}</td>
                                                    <td>{type}</td>
                                                    <td className="pr-5">{beneficiary}</td>
                                                    <td>{narration}</td>
                                                    <td className="pr-5">{date}</td>
                                                    <td>{reference}</td>
                                                    <td>{status}</td>
                                                    <td>{aplResp}</td>
                                                </tr>
                                            )
                                        })
                                    }
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

                </div>

            </RightContainer>
        </div>
    )
}

export default ProfileSearchPage