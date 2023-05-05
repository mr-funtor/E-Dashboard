import { useContext } from "react";
import { NavContext } from "../contexts/NavbarContextProvider";

const styles={
    container:`flex-1 ml-[17%] pt-20 relative`,
    containerTwo:`flex-1 ml-[8%] pt-20 relative`,
}

const RightContainer = ({children})=>{
    const {isNavOpen,} = useContext(NavContext);
    return(
        <div className={ isNavOpen ? styles.container : styles.containerTwo}>
            {children}
        </div>
    )
}

export default RightContainer;