import * as React from "react";
import "./styles/footerNavigation.scss"
import {Navigation, NavigationProps} from "../../../../Components";

const menuItems: NavigationProps["menuItems"] = [
   {label: 'About Us', link: "/AboutUs", style: "other"},
   {label: 'Careers', link: "/Careers", style: "other"},
   {label: 'Blog', link: "/Blog", style: "other"},
];
const Support = () => {
   return (
      <div className="footerNavigation">
         <h1 className="footerNavigation__title">Support</h1>
         <Navigation theme="footer" menuItems={menuItems}/>
      </div>
   );
}
export default Support