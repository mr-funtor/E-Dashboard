import { Outlet } from "react-router-dom"

//components
import { CustomButton, CustomInput, SideNavbar, RightContainer, TopNav } from "../../components"

//assets
import { SearchIcon } from "../../constants/icons"

const MainEnquiryPage=()=>{
    return(
    <>
       <TopNav
            leftTitle={"Enquiries & Disputes"}
        />

        <div className="min-h-screen bg-gray-50 w-full py-5 px-8">
            <div className=" bg-white py-10 px-5 rounded-md">
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
                <Outlet/>
            </div>
        </div> 
    </>
    )
}

export default MainEnquiryPage