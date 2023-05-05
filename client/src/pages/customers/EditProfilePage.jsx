import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//components
import {
TopNav,
CustomInput, 
CustomButton, 
ConfirmationModal, 
AuthoriseSuccessModal, 
LoaderScreen } from "../../components";

//assets
import CustomerPic from "../../assets/images/idris.jpg";

//data Handling
import { editCustomerDetails, fetchCustomerProfile } from "../../axios/CustomersAxios";

// formik
import { Formik } from "formik";

//tailwind
const styles={
    imgRing:`h-48 w-48 rounded-full border-2 
            border-gray-300 flex items-center 
            justify-center relative`,
    onlineIndicator:`h-4 w-4 bg-green-500 rounded-full absolute top-7 right-3`,
    profileTab:`flex items-center mr-10 py-3`,
    tabFocused:`border-b-2 border-keystonePrimaryBlue`,
    tabText:`text-sm`,
}


const EditProfilePage=()=>{
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isApproveModalOpen, setApproveIsModalOpen] = useState(false);

    const [file, setFile] = useState([])
    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("");
    const [dailyLimit, setDailyLimit] = useState("");
    const [internalKeyLimit, setInternalKeyLimit] = useState("");
    const [transactionLimit, setTransactionLimit] = useState("");
    const [nipTransactionLimit, setNipTransationLimit] = useState("");

    const editingTheProfile=async ()=>{
        const payload={
            title:'mama',
            body:'bar',
            userId: 340,
        }

        setLoading(true)
        try {
            const res = await editCustomerDetails(payload);
            setIsModalOpen(false)
            setApproveIsModalOpen(true)
            console.log(res.data)
        } catch (error) {
            console.log(error.response)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        setName("Olalekan J. Aminu");
        setPhoneNumber("08099795746");
        setEmail("olalekan@gmail.com");
        setDailyLimit("2,000,000");
        setInternalKeyLimit("2,000,000");
        setTransactionLimit("2,000,000");
        setNipTransationLimit("2,000,000");

        (async()=>{
            setLoading(true)
            try {
                const res = await fetchCustomerProfile();
                console.log(res.data)
            } catch (error) {
                console.log(error.response)
            }finally{
                setLoading(false)
            }
        })()
    },[])


    if (loading) return <LoaderScreen/>

    return(
        <>
            <TopNav
                leftTitle={"Customer Details"}
                leftSubTitle={"Registered on: Dec.."}
            />

            <Formik
                enableReinitialize={true}
                initialValues={{
                    name,
                    phoneNumber,
                    email,
                    dailyLimit,
                    internalKeyLimit,
                    transactionLimit,
                    nipTransactionLimit
                }}
                onSubmit={(values)=>{
                    console.log(values);
                    setIsModalOpen(true)
                }}
            >
            {({values,errors,handleSubmit})=>{
                return(
                <div className="min-h-screen bg-gray-50 w-full py-5 px-8">
                    <div className=" bg-white py-4 px-7 rounded-md">
                        <div>
                            <div className="mt-8 flex ">
                                <div className="w-full">
                                    <div className={styles.imgRing}>
                                        <div className={styles.onlineIndicator}></div>
                                        <div className="w-[85%] h-[85%] rounded-full overflow-hidden bg-gray-300 ">
                                            <img 
                                                src={CustomerPic}
                                                alt="customer profile picture"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    <div className=" mt-[60px]">
                                        <CustomInput
                                            labeltext={"Customer's Name"}
                                            labelstyle={`mb-0 text-gray-400`}
                                            containerstyle={`border-2 border-gray-200 p-2 py-0 mb-6`}
                                            inputcasestyle={`border-0 h-8`}
                                            inputstyle={`pl-0 text-md bg-white`}
                                            // defaultValue="Olalekan S. Aminu"
                                            value={name}
                                            onChange={(e)=>setName(e.target.value)}
                                        />

                                        <CustomInput
                                            labeltext={"Username"}
                                            labelstyle={`mb-0 text-gray-400`}
                                            containerstyle={`border-2 border-gray-200 p-2 py-0 mb-6`}
                                            inputcasestyle={`border-0 h-8`}
                                            inputstyle={`pl-0 text-md bg-white`}
                                            defaultValue="olalekan"
                                            disabled
                                        />

                                        <CustomInput
                                            labeltext={"Phone Number"}
                                            labelstyle={`mb-0 text-gray-400`}
                                            containerstyle={`border-2 border-gray-200 p-2 py-0 mb-6`}
                                            inputcasestyle={`border-0 h-8`}
                                            inputstyle={`pl-0 text-md bg-white`}
                                            // defaultValue="08099795746"
                                            value={phoneNumber}
                                            onChange={(e)=>setPhoneNumber(e.target.value)}
                                        />

                                    </div>
                                </div>

                                <div className="w-full mx-10 ">
                                    <CustomInput
                                        labeltext={"Email"}
                                        labelstyle={`mb-0 text-gray-400`}
                                        containerstyle={`border-2 border-gray-200 p-2 py-0 mb-6`}
                                        inputcasestyle={`border-0 h-8`}
                                        inputstyle={`pl-0 text-md bg-white`}
                                        // defaultValue="olalekan@gmail.com"
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                    />

                                    <CustomInput
                                        labeltext={"Daily Limit"}
                                        labelstyle={`mb-0 text-gray-400`}
                                        containerstyle={`border-2 border-gray-200 p-2 py-0 mb-6`}
                                        inputcasestyle={`border-0 h-8`}
                                        inputstyle={`pl-0 text-md bg-white`}
                                        // defaultValue="1,000,000"
                                        value={dailyLimit}
                                        onChange={(e)=>setDailyLimit(e.target.value)}
                                    />

                                    <CustomInput
                                        labeltext={"Keystone Limit (Internal)"}
                                        labelstyle={`mb-0 text-gray-400`}
                                        containerstyle={`border-2 border-gray-200 p-2 py-0 mb-6`}
                                        inputcasestyle={`border-0 h-8`}
                                        inputstyle={`pl-0 text-md bg-white`}
                                        // defaultValue="1,000,000"
                                        value={internalKeyLimit}
                                        onChange={(e)=>setInternalKeyLimit(e.target.value)}
                                    />
                                    
                                    <CustomInput
                                        labeltext={"Transaction Limit"}
                                        labelstyle={`mb-0 text-gray-400`}
                                        containerstyle={`border-2 border-gray-200 p-2 py-0 mb-6`}
                                        inputcasestyle={`border-0 h-8`}
                                        inputstyle={`pl-0 text-md bg-white`}
                                        // defaultValue="1,000,000"
                                        value={transactionLimit}
                                        onChange={(e)=>setTransactionLimit(e.target.value)}
                                    />

                                    <CustomInput
                                        labeltext={"NIP Transfer Limit"}
                                        labelstyle={`mb-0 text-gray-400`}
                                        containerstyle={`border-2 border-gray-200 p-2 py-0 mb-6`}
                                        inputcasestyle={`border-0 h-8`}
                                        inputstyle={`pl-0 text-md bg-white`}
                                        // defaultValue="1,000,000"
                                        value={nipTransactionLimit}
                                        onChange={(e)=>setNipTransationLimit(e.target.value)}
                                    />

                                    <CustomInput
                                        labeltext={"Last Login Channel"}
                                        labelstyle={`mb-0 text-gray-400`}
                                        containerstyle={`border-2 border-gray-200 p-2 py-0 mb-6`}
                                        inputcasestyle={`border-0 h-8`}
                                        inputstyle={`pl-0 text-md bg-white`}
                                        defaultValue="MOBILE"
                                        disabled
                                    />
                                </div>

                                <div className="w-full ">
                                    <CustomInput
                                        labeltext={"Customer's NUBAN"}
                                        labelstyle={`mb-0 text-gray-400`}
                                        containerstyle={`border-2 border-gray-200 p-2 py-0 mb-6`}
                                        inputcasestyle={`border-0 h-8`}
                                        inputstyle={`pl-0 text-md bg-white`}
                                        defaultValue="1029874"
                                        disabled
                                    />

                                    <CustomInput
                                        labeltext={"Account No."}
                                        labelstyle={`mb-0 text-gray-400`}
                                        containerstyle={`border-2 border-gray-200 p-2 py-0 mb-6`}
                                        inputcasestyle={`border-0 h-8`}
                                        inputstyle={`pl-0 text-md bg-white`}
                                        defaultValue="102987499"
                                        disabled
                                    />

                                    <CustomInput
                                        labeltext={"Enrol Type"}
                                        labelstyle={`mb-0 text-gray-400`}
                                        containerstyle={`border-2 border-gray-200 p-2 py-0 mb-6`}
                                        inputcasestyle={`border-0 h-8`}
                                        inputstyle={`pl-0 text-md bg-white`}
                                        defaultValue="WITHOUT CARD"
                                        disabled
                                    />
                                    
                                    <CustomInput
                                        labeltext={"Profile Status"}
                                        labelstyle={`mb-0 text-gray-400`}
                                        containerstyle={`border-2 border-gray-200 p-2 py-0 mb-6`}
                                        inputcasestyle={`border-0 h-8`}
                                        inputstyle={`pl-0 text-md bg-white`}
                                        defaultValue="Active"
                                        disabled
                                    />

                                    <CustomInput
                                        labeltext={"Last Login"}
                                        labelstyle={`mb-0 text-gray-400`}
                                        containerstyle={`border-2 border-gray-200 p-2 py-0 mb-6`}
                                        inputcasestyle={`border-0 h-8`}
                                        inputstyle={`pl-0 text-md bg-white`}
                                        defaultValue="Oct 28, 2022, 11:50 A.M"
                                        disabled
                                    />

                                    <CustomInput
                                        labeltext={"App Version"}
                                        labelstyle={`mb-0 text-gray-400`}
                                        containerstyle={`border-2 border-gray-200 p-2 py-0 mb-6`}
                                        inputcasestyle={`border-0 h-8`}
                                        inputstyle={`pl-0 text-md bg-white`}
                                        defaultValue="1.0"
                                        disabled
                                    />
                                </div>
                            </div>

                        </div>

                        <div>
                            <label htmlFor="fileUpload" className="block mb-2">Upload File</label>
                            <div className="border-dashed border-2 border-grey-100 w-fit p-3">
                                <input 
                                    type="file"
                                    name="fileUpload"
                                    id="fileUpload"
                                    
                                />
                            </div>
                        </div>

                        <div className="flex space-x-6 mt-10 w-2/3 ">
                            <CustomButton
                                buttonText={"Update User Profile"}
                                type="submit"
                                onClick={()=>handleSubmit()}
                            />

                            <CustomButton
                                buttonText={"CANCEL"}
                                containerStyle={`bg-white border-2 border-red-400 text-red-400`}
                                onClick={()=>navigate(-1)}
                            />
                        </div>
                    </div>
                </div>

                )

            }}
            </Formik>


            <ConfirmationModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                setApproveIsModalOpen={setApproveIsModalOpen}
                approveOnClick={()=>{
                    editingTheProfile()
                }}
            />

            <AuthoriseSuccessModal
                isApproveModalOpen={isApproveModalOpen}
                setApproveIsModalOpen={setApproveIsModalOpen}
            />
        </>
    )
}

export default EditProfilePage;