import { useState,useEffect } from "react";
import { Navigate,Outlet, useLocation, useNavigate} from "react-router-dom";
import { RightContainer, SideNavbar } from "./components";
import { tokenFinder } from "./utils/tokenFinder";

// redux
import { useSelector,useDispatch } from "react-redux";
import { loggedIn } from "./redux/features/authSlice";

const ProtectedRoute = ()=>{
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const authState = useSelector((state)=>state.auth.isAuth);


  useEffect(()=>{
    // check for the validity of cookie
    const tokenValue= tokenFinder();
    
    if(tokenValue){
      const parsedValue= JSON.parse(tokenValue)
      dispatch(loggedIn(parsedValue))

      // Maintains the page the user is on
      // Even after a refresh, the page stays the same
      navigate(pathname)
    }
  },[])

  if(!authState){
    return <Navigate to="/"/>
  }

  return(
    <div className="flex">
      <SideNavbar/>
      <RightContainer>
        <Outlet/>
      </RightContainer>
    </div>
     )
}

export default ProtectedRoute;