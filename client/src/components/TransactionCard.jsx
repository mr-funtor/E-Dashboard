import BoomerangIcon from "../assets/icons/BoomerangIcon.svg"
import MobileDataIcon from "../assets/icons/MobileData.svg"

const styles = {
    container:`h-48 w-40 bg-white rounded-md p-5 flex flex-col justify-between items-center`,
    imgTitle:`bg-green-100 p-2 rounded-full`,
    boomerandImg:`p-2 bg-green-100 rounded-full`,
    percentText:`ml-2 text-xs text-green-600`,
}

const TransactionCard = ({titleIcon,cardTitle, cardFigure, figurePercent,imageStyle, percentTextStyle,percentageImage})=> {
    return(
        <article className={styles.container}>
            <div className="flex flex-col items-center">
                <img 
                    src={titleIcon || MobileDataIcon}
                    alt="icon"
                    className={`${styles.imgTitle} ${imageStyle}`}
                />
                <p className="font-light mt-1 text-keystonePrimaryBlue text-center">{cardTitle}</p>
            </div>

            <div>
                <h6 className="text-keystonePrimaryBlue">{cardFigure}</h6>
                <div className="flex justify-center items-center mt-1">
                    <img 
                        src={percentageImage || BoomerangIcon}
                        alt="icon"
                        className={`${styles.boomerandImg} ${imageStyle}`}
                    />
                    <p className={`${styles.percentText} ${percentTextStyle}`}>{figurePercent}</p>
                </div>
            </div>

        </article>
    )
}

export default TransactionCard;