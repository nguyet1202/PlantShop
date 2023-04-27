import {Navigation, NavigationProps} from "../../../../Components";
import * as React from "react";
import "./styles/footerNavigation.scss"

const menuItems: NavigationProps["menuItems"] = [
   {label: 'Payment & Tax', link: "/Payment&Tax", style: "other"},
   {label: 'Team of service', link: "/service", style: "other"},
   {label: 'Privacy Policy', link: "/Privacy", style: "other"},
];
const UsefulLink = () => {
   return (
      <div className="footerNavigation">
         <h1 className="footerNavigation__title">Useful Link</h1>
         <Navigation theme="footer" menuItems={menuItems}/>
      </div>
   )
}
 export default UsefulLink;