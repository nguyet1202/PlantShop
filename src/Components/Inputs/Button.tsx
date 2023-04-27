import React from "react";
import {ComponentSize} from "../../Types";
import {IconType} from "react-icons/lib"
import {ReactElement} from "react";
import "./styles/Button.scss"
interface ButtonProps {
   label:string
   description:string
   theme: "primary" | "secondary" | "Tertiary" | "quaternary"
   icon?: ReactElement<IconType> | ReactElement
   size: ComponentSize
}

const Button = (props:ButtonProps) => {
   return (
      <button className={`button button--${props.theme} button--${props.size}`}>
         <div className={`button--${props.theme}__icon`}>
            {props.icon}
         </div>
         <div className={`button--${props.theme}__label`}>
            <p className={`button--${props.theme}__label__title`}>
               {props.label}
            </p>
            <p className={`button--${props.theme}__label__description`}>
               {props.description}
            </p>
         </div>
      </button>
   )
}
export {type ButtonProps}
export default Button