import React, {ReactElement, useState} from 'react';
import {MenuItem, MenuItemProps} from "./index";
import "./styles/Navigation.scss";
import {IconType} from "react-icons/lib";
import {FiAlignLeft} from "react-icons/fi";

interface NavigationProps {
   menuItems: MenuItemProps[];
   icon?: ReactElement<IconType> | ReactElement
   theme: "header" | "footer" | "other"
}

const Navigation = ({menuItems, icon, theme}: NavigationProps) => {
   const [open, setOpen] = useState(false);
   return (
      <div className={`navigation`}>
         <div className={`navigation--${theme}`}>
            <div className={`navigation--${theme}__main`}>
               <div className=' cursor-pointer flex items-center'>
                  <FiAlignLeft onClick={() => setOpen(!open)} size={40} color="white"
                               className={`navigation--${theme}__headerIcon-bar`}/>
               </div>
               <nav>
                  <div>
                     <ul
                        className={` navigation--${theme}__listItem navigation--${theme}__listItem__${open ? 'open' : 'close'} `}>
                        {menuItems.map((menuItem, index) => (
                           <MenuItem key={index} {...menuItem} />
                        ))}
                     </ul>
                  </div>
               </nav>
            </div>
         </div>
      </div>

   );
};
export {type NavigationProps}

export default Navigation;
