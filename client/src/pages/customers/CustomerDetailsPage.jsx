import { useState } from "react";
import { Outlet,NavLink } from "react-router-dom";

// components
import {CustomToast, TopNav } from "../../components";

// assets
import { ProfileIcon, TransactionsIconBlack } from "../../constants/icons";
import CustomerPic from "../../assets/images/idris.jpg";

// tailwind
const styles={
    imgRing:`h-48 w-48 rounded-full border-2 
            border-gray-300 flex items-center 
            justify-center relative`,
    onlineIndicator:`h-[6px] w-[6px] bg-green-500 rounded-full absolute top-2 right-[-2px]`,
    profileTab:`flex items-center mr-10 py-3`,
    tabFocused:`border-b-2 border-keystonePrimaryBlue`,
    tabText:`text-sm`,
}


const CustomerDetailsPage=()=>{
    const [navIndex, setNavIndex] = useState(0);
    const [errorMessage, setErrormessage] = useState("")


    
    return(
        <>
            <TopNav
                leftTitle={"Customer Details"}
            />

            <div className="min-h-screen bg-gray-50 w-full py-5 px-8">
                <div className=" bg-white py-9 px-7 rounded-md">
                    <nav className="flex justify-between">
                        <div className="flex items-center">
                            <NavLink to="profile">
                                <button 
                                    className={`${styles.profileTab} ${navIndex === 0 && styles.tabFocused}`}
                                    onClick={()=>setNavIndex(0)}
                                >
                                    <img 
                                        src={ProfileIcon}
                                        alt="Profile icon"
                                        className="mr-2 h-5"
                                    />
                                    <p className={`${styles.tabText} ${navIndex !== 0 && "text-gray-400"}`}>Profile</p>
                                </button>

                            </NavLink>

                            <NavLink to="transactions">
                                <button 
                                    className={`${styles.profileTab} ${navIndex === 1 && styles.tabFocused}`}
                                    onClick={()=>setNavIndex(1)}
                                >
                                    <img 
                                        src={TransactionsIconBlack}
                                        alt="Transaction icon"
                                        className="mr-3 h-4"
                                    />
                                    <p className={`${styles.tabText} ${navIndex !== 1 && "text-gray-400"}`}>Orders</p>
                                </button>

                            </NavLink>
                        </div>

                        {
                        //shows the small customer profile when the user clicks on the "transaction" tab
                        navIndex === 1 && <div className="flex items-center">
                            <div className="h-11 w-11 rounded-full border-2 
                                border-gray-300 flex items-center justify-center mr-2 relative">
                                <div className="w-[85%] h-[85%] rounded-full overflow-hidden">
                                    <img 
                                        src={CustomerPic} 
                                        alt="profile picture"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="flex items-start justify-center flex-col text-xs ">
                                <p>Olalekan S. Aminu</p>
                            </div>
                        </div>}

                    </nav>
                    
                    <Outlet/>

                </div>
            </div>
        </>
    )
}

export default CustomerDetailsPage;