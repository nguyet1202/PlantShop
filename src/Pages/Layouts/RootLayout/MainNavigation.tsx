import * as React from "react";
import {Navigation, NavigationProps} from "../../../Components";
import { BsCartFill } from "react-icons/bs";

const menuItems: NavigationProps["menuItems"] = [
   { label: 'Home', link: "/", style:"active" },
   { label: 'Shop', link: "/Shop", style:"normal" },
   { label: 'Contact Us', link: "/contact", style:"normal" },
   { label: 'About Us', link: "/aboutus", style:"normal" },
];
const MainNavigation = () => {
   return (
      <Navigation  theme="header" menuItems={menuItems} icon={<img className="cursor-pointer text-white " src="./images/icons/cartIcon.png" alt="Cart icon"/>} />
   );
}
export default MainNavigation