import {Navigation, NavigationProps} from "../../../../Components";
import * as React from "react";
import "./styles/footerNavigation.scss"

const menuItems: NavigationProps["menuItems"] = [
   {label: 'Best Product', link: "/best-product", style: "other"},
   {label: 'Category', link: "/Category", style: "other"},
];
const Menu = () => {
   return (
      <div className="footerNavigation">
         <h1 className="footerNavigation__title">Our Menu</h1>
         <Navigation theme="footer" menuItems={menuItems}/>
      </div>
   )
}
export default Menu;