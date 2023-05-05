import { createContext, useState } from "react"

export const NavContext = createContext()

//This context is to track what part of the navbar we are in
//this helps to change the small line that appears in fron of each nav item

const NavbarContextProvider =({children})=>{
    const [navIndex,setNavIndex] = useState(0);
    const [isNavOpen, setIsNavOpen] = useState(true);

    return(
        <NavContext.Provider
            value={{
                navIndex,
                setNavIndex,
                isNavOpen, setIsNavOpen,
            }}
        >
            {children}
        </NavContext.Provider>
    )
}

export default NavbarContextProvider