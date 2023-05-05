
const styles={
    btnBody:`bg-monroePurple w-full h-12 text-white rounded-md`,
    btnBody2:`w-full h-12 text-white rounded-md`,
}

const CustomButton=({onClick,containerStyle,buttonText,type})=>{
    return(
        <button
            className={`${!containerStyle ? styles.btnBody : styles.btnBody2} ${containerStyle}`}
            onClick={onClick}
            type={type}
        >
            <p>{buttonText}</p>
        </button>
    )
}

export default CustomButton