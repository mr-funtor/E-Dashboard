import { useEffect } from "react";

const styles={
    container:`absolute top-10 left-[50%] max-w-[80%] min-w-[250px] h-14 p-5 text-center
                translate-x-[-50%] bg-green-300 z-10 flex items-center justify-center rounded-md`,
    errorBackG:`absolute top-10 left-[50%] max-w-[80%] min-w-[250px] h-14 p-5 text-center
    translate-x-[-50%] z-10 flex items-center justify-center rounded-md bg-red-700 text-white`,
    hide:`hidden`
}

const CustomToast = ({message,setMessage,ifError})=>{

    useEffect(()=>{
        if(message){
            setTimeout(()=>setMessage(""),4000)
        }

    },[message])

    return(
        <div
            className={`${ifError ? styles.errorBackG : styles.container} ${!message && styles.hide}`}
        >
            <h1>{message}</h1>
        </div>
    )
}

export default CustomToast;