import React, {ReactElement} from 'react';
import Container from '@mui/material/Container';
import {RouteConfig} from '../../Types';
import {MenuItem, MenuItemProps} from "./index";
import CartIcon from "./CartIcon";
import "./styles/main.scss";
import {IconType} from "react-icons/lib";
import {FiAlignLeft} from "react-icons/fi";

interface NavigationProps {
   menuItems: MenuItemProps[];
   icon?: ReactElement<IconType> | ReactElement
   theme: "header" | "footer" | "other"
}

const Navigation = ({menuItems, icon, theme}: NavigationProps) => {
   return (
      <nav className={`navigation`}>
         <div className={`navigation navigation--${theme}`}>
            <ul className={`navigation--${theme}__listItem`}>
               {menuItems.map((menuItem, index) => (
                  <MenuItem key={index} {...menuItem} />
               ))}
            </ul>
            <ul>
               <FiAlignLeft size={40} color="white" className={`navigation--${theme}__headerIcon-bar`}/>
            </ul>
            {icon &&
                <ul>
                   {icon}
                </ul>
            }
         </div>
      </nav>
   );
};
export {type NavigationProps}

export default Navigation;
