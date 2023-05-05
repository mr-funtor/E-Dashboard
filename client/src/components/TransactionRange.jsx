import { useState } from "react";
import DatePicker from 'react-date-picker';
import CustomButton from "./CustomButton";

const TransactionRange = ()=>{
    const [value, setValue] = useState(new Date());

    return(
        <div>
            <p className="font-light">Transaction Range</p>
            <div className="flex h-10 items-center mt-2">
                <DatePicker 
                    onChange={setValue} 
                    value={value} 
                    clearIcon={null}
                    className={`h-full`}
                />
                <p className="mx-2"> - </p>
                <DatePicker 
                    onChange={setValue}
                    value={value}
                    clearIcon={null}
                    className={`h-full mr-5`}
                />
                <CustomButton
                    buttonText={"GENERATE REPORT"}
                    containerStyle={`w-36 h-full block text-xs rounded-sm`}
                />
            </div>
        </div>
    )
}

export default TransactionRange