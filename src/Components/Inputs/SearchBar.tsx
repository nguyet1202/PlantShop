import React from "react";
import {ComponentSize} from "../../Types";
import {IconType} from "react-icons/lib"
import {ReactElement} from "react";
import "./styles/SearchBar.scss"

interface SearchBarProps {
   label: string
   description?: string
   theme: "primary" | "secondary" | "Tertiary" | "quaternary"
   icon?: ReactElement<IconType> | ReactElement
   size: ComponentSize
}

const SearchBar = (props: SearchBarProps) => {
   return (
      <button className={`searchbar searchbar--${props.theme} searchbar--${props.size}`}>
         <input className={`searchbar--${props.theme}__input `} name="search bar" defaultValue={props.label}/>
         <div className={`searchbar--${props.theme}__icon`}>
            {props.icon}
            {props.description}
         </div>
      </button>
   )
}
export {type SearchBarProps}
export default SearchBar