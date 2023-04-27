import * as React from "react";
import "./styles/footerNavigation.scss"
import {Navigation, NavigationProps} from "../../../../Components";

const menuItems: NavigationProps["menuItems"] = [
   {
      label: 'JL. Setiabudhi No. 193 Sukasari, Bandung\n' +
         'West Java, Indonesia', link: "", style: "other"
   },
   {label: 'hallo@daunku.com', link: "", style: "other"},
];
const Address = () => {
   return (
      <div className="footerNavigation">
         <h1 className="footerNavigation__title">Address</h1>
         <Navigation theme="footer" menuItems={menuItems}/>
      </div>
   );
}
export default Address