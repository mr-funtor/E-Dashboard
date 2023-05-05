import CustomButton from "./CustomButton"

//assets
import { xCloseIcon,ErrorCircle } from "../constants/icons"

const styles={
    modalShow:`fixed top-0 left-0 h-full w-full bg-[rgba(0,37,97,0.5)] flex items-center justify-center`,
    modalHidden:`hidden`
}

// EXAMPLE
{/* 
<ConfirmationModal
    isModalOpen={isModalOpen}
    setIsModalOpen={setIsModalOpen}
    setApproveIsModalOpen={setApproveIsModalOpen}
    approveOnClick={()=>{
                }}
/> 
*/}

// isModalOpen: Boolean // the state that shows the modal
// setIsModalOpen:function //sets the above state
// setApproveIsModalOpen:function //sets the state that open the AuthorisetModal
// approveOnClick:function // determines the actions you want performed when the "approve" button is clicked


const ConfirmationModal = ({isModalOpen,setIsModalOpen,setApproveIsModalOpen,approveOnClick})=>{
    return(
        <div className={isModalOpen ? styles.modalShow : styles.modalHidden}>
            <div className="bg-white w-2/4 h-4/5 rounded-lg relative flex flex-col p-10">
                <img 
                    src={xCloseIcon} 
                    alt="close icon"
                    className="absolute top-3 right-3 cursor-pointer"
                    onClick={()=>setIsModalOpen(false)} 
                />
                <div className="h-4/5 flex flex-col items-center justify-center">
                    <img src={ErrorCircle} alt="an icon"/>
                    <h1 className="text-2xl text-[rgba(99,111,130,1)] font-bold">Are you sure?</h1>
                    <h2 className="text-keystonePrimaryBlue mt-4">Message will be sent to the Authorizer</h2>
                </div>
                <div className="flex flex-1 space-x-6 mt-10 w-full">
                    <CustomButton
                        buttonText={"YES, I APPROVE"}
                        containerStyle={`bg-[#1EBD71] text-white`}
                        onClick={approveOnClick} 
                    />

                    <CustomButton
                        buttonText={"CANCEL"}
                        containerStyle={`bg-white border-2 border-red-300 text-red-300`}
                        onClick={()=>setIsModalOpen(false)} 
                    />
                </div>
            </div>
        </div>
    )
}

export default ConfirmationModal