// context
import { useContext } from "react";
import { NavContext } from "../contexts/NavbarContextProvider";

// assets
import ProfilePic from "../assets/ProfilePic.png";

// redux
import { useSelector } from "react-redux";


const styles={
    container:`h-20 w-[83%] px-10 flex-1 flex justify-end items-center fixed top-0 bg-white z-10`,
    containerTwo:`h-20 w-[92%] px-10 flex-1 flex justify-end items-center fixed top-0 bg-white z-10`,
    moveLeft:`justify-between`
};

const TopNav =(props)=>{
    const {isNavOpen} = useContext(NavContext);
    const {user}  = useSelector((state)=>state.auth)

    return(
        <header className={`${isNavOpen ? styles.container : styles.containerTwo} ${props.leftTitle && styles.moveLeft}`}>
            {props.leftTitle &&( 
                <div>
                    <h1 className="text-xl">{props.leftTitle}</h1>
                    <p className="text-xs text-gray-500">{props.leftSubTitle}</p>
                </div>
            )}
            <div className="flex items-center">
                <div className="h-9 w-9 rounded-full overflow-hidden mr-2">
                    <img 
                        src={ProfilePic} 
                        alt="profile picture"
                        className="h-full w-full object-cover"
                     />
                </div>

                <div className="flex items-start justify-center flex-col text-xs ">
                    <p>{user}</p>
                    <p className="text-gray-400">Admin</p>
                </div>

            </div>
        </header>
    )
}

export default TopNav