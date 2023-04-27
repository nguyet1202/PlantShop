import {CardButton, CardButtonProps} from "../Inputs";
import {IconType} from "react-icons/lib"
import {ReactElement} from "react";
import "./style/productCard.scss"
import React from "react";

interface ProductCardProps {
   id:number;
   productName: string;
   productImage: string;
   rateValue: number;
   price: number;
   icon?: ReactElement<IconType> | ReactElement;
}
const ProductCard = (props: ProductCardProps) => {
   return (
      <div className={`productCard`}>
         <img src={props.productImage} alt={props.productName} className="productCard__image" />
         <CardButton
            productName={props.productName}
            rateValue={props.rateValue}
            price={props.price}
            icon={props.icon}
         />
      </div>
   );
};
export {type ProductCardProps}
export default ProductCard