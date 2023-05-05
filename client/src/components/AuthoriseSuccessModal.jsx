import CustomButton from "./CustomButton";

//assets
import { xCloseIcon,SuccessTick } from "../constants/icons"

const styles={
    approveModalShow:`fixed top-0 left-0 h-full w-full bg-black flex items-center justify-center`,
    approveModalHidden:`hidden`,
}

//EXAMPLE
{/* 
<AuthoriseSuccessModal
    isApproveModalOpen={isApproveModalOpen}
    setApproveIsModalOpen={setApproveIsModalOpen}
/> 
*/}

// isApproveModalOpen: Boolean // the state that shows the modal
// setApproveIsModalOpen: //sets the above state

const AuthoriseSuccessModal = ({isApproveModalOpen,setApproveIsModalOpen})=>{
    return(
        <div className={isApproveModalOpen ? styles.approveModalShow : styles.approveModalHidden}>
            <div className="bg-white w-2/4 h-4/5 rounded-lg relative flex flex-col p-10">
                <img 
                    src={xCloseIcon} 
                    alt="close icon"
                    className="absolute top-3 right-3 cursor-pointer"
                    onClick={()=>setApproveIsModalOpen(false)} 
                />
                <div className="h-4/5 flex flex-col items-center ">
                    <img 
                        src={SuccessTick}
                        alt="an icon"
                        className="h-[250px]"
                    />
                    <h1 className="text-3xl text-[#1EBD71] font-medium">Sent</h1>
                    <h2 className="text-keystonePrimaryBlue text-lg font-medium mt-4">Sent to Authorizer</h2>
                </div>
                <div className="flex flex-1 justify-center">
                    <CustomButton
                        buttonText={"CONTINUE"}
                        containerStyle={`bg-keystonePrimaryBlue text-white w-64`}
                        onClick={()=>setApproveIsModalOpen(false)}
                    />
                </div>
            </div>
        </div>
    )
}

export default AuthoriseSuccessModal