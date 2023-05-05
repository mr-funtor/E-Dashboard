import { useState } from "react"


const styles={
    container:`border-2 border-grey-300 rounded-sm flex items-center bg-white h-12`,
    mainInput:`block  w-full h-full rounded-sm outline-none pl-2`,
    errorMsg:`text-xs text-keystoneError`,
    dangerBorder:`border-keystoneError`,
    blueBorder:`border-keystonePrimaryBlue`,
    labelStyle:`mb-2 inline-block text-sm font-light`,
}

// NB
// containerStyle: styles the entire body which also houses the label
// inputCaseStyle: styles just the area around the icon and the input
// inputStyle: styles the input itself

// Example
{/* <CustomInput
    labeltext={"NIP Transfer Limit"}
    labelstyle={`mb-0 text-gray-400`}
    containerstyle={`border-2 border-gray-200 p-2 py-0 mb-10`}
    inputcasestyle={`border-0 h-8`}
    inputstyle={`pl-0 text-md`}
    defaultValue="1,000,000"
/> */}

const CustomInput =(props)=>{
    const [onFocus, setOnFocus] = useState(false)


    return(
        <div className={`${props.containerstyle}`}>
            {props.labeltext && <label 
                htmlFor={props.name}
                className={`${styles.labelStyle} ${props.labelstyle}`}
            >{props.labeltext}</label>
            }
            <div className={`${styles.container} ${props.inputcasestyle} ${onFocus && styles.blueBorder}`}> 
                {props.lefticon && <img src={props.lefticon} className="mx-2 h-3"/>}

                <input 
                    {...props}
                    type={props.type ? props.type :'text'}
                    name={props.name}
                    id={props.name}
                    className={`${styles.mainInput} ${props.inputstyle}  ${props.error && styles.dangerBorder}`}
                    onFocus={()=>setOnFocus(true)}
                    onBlur={()=>setOnFocus(false)}
                />

            </div>
            {props.error && <p className={styles.errorMsg}>{props.error}</p>}
        </div>
    )
}

export default CustomInput