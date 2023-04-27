import {ReactElement} from "react";
import {IconType} from "react-icons/lib";
import "./styles/CardButton.scss"
import Rating from '@mui/material/Rating';
interface CardButtonProps {
   rateValue: number
   productName: string
   price: number
   icon?: ReactElement<IconType> | ReactElement
}

const CardButton = (props: CardButtonProps) => {
   return (
      <button className={`cardButton`}>
         <div className={`cardButton__name-rateProduct`}>
            <span className={`cardButton__name-rateProduct__nameStyle`}>{props.productName}</span>
            <Rating name="read-only" value={props.rateValue} readOnly />
         </div>
         <div className={`cardButton__priceProduct`}>
            <span className={`cardButton__priceProduct__priceStyle`}>$ {props.price}</span>
            <div className={`cardButton__priceProduct__iconStyle`}>
               {props.icon}
            </div>
         </div>
      </button>
   )
}
export {type CardButtonProps}
export default CardButton