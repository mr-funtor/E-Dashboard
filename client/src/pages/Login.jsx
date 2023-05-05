import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { tokenFinder } from "../utils/tokenFinder";

// assets
import LoginImage from "../assets/LogHero.png";
import Notes from "../assets/images/notes.png";

// components
import { CustomInput,CustomButton, CustomToast,LoaderScreen } from "../components";

// Formik
import { Formik } from "formik";
import * as yup from "yup"

// redux
import { useDispatch } from "react-redux";
import { loggedIn } from "../redux/features/authSlice";

// Data Handling
import { loginAdmin } from "../axios/AuthAxios";
import { useQuery } from "@tanstack/react-query";

const styles ={
    heroFirstHalf:`flex-1 h-screen bg-white relative flex justify-center items-center`,
    heroSecondhalf:`h-screen w-[45%] bg-white p-8 relative flex justify-center items-center`,
    headImageContainer:`h-8 w-24 bg-blue-300 `,
    logoHeroContainer:`h-10 w-32 absolute left-8 top-8`
}

const loginSchema=yup.object({
    userName:yup.string().required('This field is required'),
    password:yup.string().required('This field is required'),
})

const Login=()=>{
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrormessage] = useState("")
    const navigate = useNavigate();
    // const {pathname} = useLocation();
    const dispatch = useDispatch();

    const {isFetching, refetch,isError,error,isSuccess,data}= useQuery({
        queryKey:["login"], 
        queryFn:()=> loginAdmin({userName,password}),
        enabled:false,
    })

    const createCookieTime =()=>{
        const presentDate = new Date();
        const extendedTime = presentDate.getTime() + (1000*60*60); //expands by 1 hour
        presentDate.setTime(extendedTime);
        const cookieDate = presentDate.toUTCString();
        console.log(new Date(cookieDate),new Date());
        return cookieDate
    }


    useEffect(()=>{
        // log user in if token exists
        console.log(tokenFinder(),"TOKEN");
        const tokenValue = tokenFinder();
        if(tokenValue){
            const parsedValue= JSON.parse(tokenValue)
            dispatch(loggedIn(parsedValue));
            navigate("/dashboard");
        }

    },[])

    useEffect(()=>{
        if(!isFetching && isSuccess){
            const cookieDate = createCookieTime();
          document.cookie = `byond=${JSON.stringify(data)}; expires=${cookieDate}; path=/`
            dispatch(loggedIn(data));
            navigate("/dashboard")
        }
        if(!isFetching && isError){
            console.log(error.response.data)
            setErrormessage(error.response.data.message)
        }
    },[isFetching])

    
    if(isFetching){
        return <LoaderScreen/> 
    }
    
return(
    <main className='flex'>
        <div className={styles.heroFirstHalf}>
            <img 
                src={Notes}
                // className="h-full w-full object-cover "
            />

        </div>

        <div className={styles.heroSecondhalf}>
        <CustomToast
            ifError
            message={errorMessage}
            setMessage={setErrormessage}
        />

        <div className="px-20 mt-4 ">
            <h1 className="font-bold text-2xl mb-6">MONROE STORE ADMIN</h1>
            <Formik
                enableReinitialize={true}
                initialValues={{
                    userName,
                    password,
                }}
                validationSchema={loginSchema}
                onSubmit={async (values)=>{
                    refetch()
                }}
            >
            {({errors,values,handleSubmit})=>{
                return(
                <>
                    
                    <CustomInput
                        labeltext="Username"
                        name="username"
                        containerstyle={`mt-5`}
                        onChange={(e)=>setUserName(e.target.value)}
                        value={userName}
                        error={errors.userName}
                    />

                    <CustomInput
                        labeltext="Password"
                        name="password"
                        type="password"
                        containerstyle={`mt-5 mb-14`}
                        onChange={(e)=>setPassword(e.target.value)}
                        value={password}
                        error={errors.password}
                    />
                    
                    
                    <CustomButton 
                        buttonText={"Log In"}
                        onClick={()=>{
                            handleSubmit()
                        }}
                        type="submit"
                    />

                
                </>
                )
            }}

            </Formik>

        </div>
        </div>
</main>
)
    
}

export default Login