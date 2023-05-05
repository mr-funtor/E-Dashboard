import { useEffect, useContext } from "react"
import { useNavigate, useLocation} from "react-router-dom"
import { NavContext } from "../contexts/NavbarContextProvider"

// redux
import { useDispatch } from "react-redux";
import { loggedOut } from "../redux/features/authSlice";

// assets
import {
    NavbarOpenIcon,
    DashboardIcon,
    LogoutIcon,
    CustomerIcon,
    TransactionIcon,
    UssdIcon,
    ServiceRequestIcon,
    MessageQuestionIcon,
    SettingIconWhite
 } from "../constants/icons"


const styles ={
    container:`h-screen w-[17%] bg-monroePurple px-6 py-10 text-white fixed top-0 `,
    containerTwo:`h-screen w-[8%] bg-monroePurple px-6 py-10 text-white fixed top-0 `,
    logoHeroContainer:`h-7 w-28 `,
    navItems:`flex mt-2 pl-5 py-2 cursor-pointer`,
    frontMarking:`border-l-4 border-gray-400`,
    subNav:`flex pl-16 text-xs py-2 cursor-pointer`,
}

const allNavItems=[
    { name:'Dashboard' , icon: DashboardIcon, navigateTo:'/dashboard'},
    { name:'Customers' , icon: CustomerIcon, navigateTo:'/customers' },
    { name:'Orders' , icon: TransactionIcon, navigateTo:'/transactions'},
    { name:'Enquiries & Disputes' , icon: MessageQuestionIcon, navigateTo:'/enquiries',subPath:[
            {subName:'Enquiries & Complaints', subNav:'enquiries-complaints' }
        ]
    },
    // { name:'Reports' , icon: SettingIconWhite, navigateTo:'/customers' },
]

const SideNavbar=()=>{
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const {isNavOpen, setIsNavOpen,} = useContext(NavContext);

    const deleteCookie =()=>{
        const presentDate = new Date();
        const cookieDate = presentDate.toUTCString();
        document.cookie = `byond=; expires=${cookieDate}; path=/`
    }

    function loggingOutUser(){
        deleteCookie();
        dispatch(loggedOut());
    }
    
    function showSubNavigation(navigateTo,subPath){
        const navArray= subPath.map((pathItem,index)=>{
            const {subName, subNav} = pathItem;
            
            return( 
            <li 
                key={index}
                className={`${styles.subNav} ${pathname.includes(subNav) && "text-keystoneSecondaryBlue"}`}
                onClick={()=>{
                    if(navigateTo === "/requests"){
                        navigate(`/requests/${subNav}`)
                    }else if(navigateTo === "/enquiries" ){
                        navigate(`/enquiries/${subNav}`)
                    }else if(navigateTo === "/messages"){
                        navigate(`/messages/${subNav}`)
                    }else if(navigateTo === "/ussd"){
                        navigate(`/ussd/${subNav}`)
                    }
                }}
            >
                <p>{subName}</p>
            </li>
            )
        })
        return navArray
    }

    

    return(
    <nav className={isNavOpen ? styles.container : styles.containerTwo}>
        <div className="flex justify-between items-center">
            {isNavOpen && <div className={styles.logoHeroContainer} >
                
            </div>}

            <div 
                className="h-5 p-1 cursor-pointer"
                onClick={()=>setIsNavOpen(!isNavOpen)}
            >
                <img src={NavbarOpenIcon}/>
            </div>
        </div>

        <div className="mt-16 h-[75%] overflow-scroll ">
            <ul className="list-none">
                {
                allNavItems.map((item,index)=>{
                    const {name, icon, navigateTo,subPath} = item
                    const navigate = useNavigate()
                    return(
                        <li
                            key={index} 
                            className="h-fit"
                        >
                            <div
                                className={`${styles.navItems} ${pathname.startsWith(navigateTo) && styles.frontMarking}`}
                                onClick={()=>{
                                    switch(navigateTo){
                                        case "/requests":{
                                            navigate(`/requests/debit-card-request`);
                                            break;
                                        }
                                        case "/enquiries":{
                                            navigate(`/enquiries/enquiries-complaints`);
                                            break;
                                        }
                                        case "/messages":{
                                            navigate(`/messages/single-push-message`);
                                            break;
                                        }
                                        case "/ussd":{
                                            navigate(`/ussd/ussd-customers`);
                                            break;
                                        }
                                        default:{
                                            navigate(navigateTo)
                                        }
                                    }
                                }} 
                            >
                                <img src={icon} className="mr-3 h-4"/>
                                {isNavOpen && <p className="font-light text-xs">{name}</p>
}
                            </div>

                            {subPath && <ul
                                className={`${pathname.startsWith(navigateTo) ? "block" : "hidden"}`}
                            >{showSubNavigation(navigateTo,subPath)}</ul>
                            }
                        </li>
                    )
                })
                }
            </ul>
        </div>

        <div 
            className="flex items-center mt-8 absolute bottom-12 cursor-pointer pl-5 py-2 "
            onClick={loggingOutUser}
        >
            <img src={LogoutIcon} className="mr-3 h-4"/>
            {isNavOpen && <p className="font-light text-xs">Logout</p>}
        </div>
    </nav>
    )
}

export default SideNavbar