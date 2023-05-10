import * as React from "react";
import {Navigation, NavigationProps} from "../../../Components";
import {CartIcon} from "../../../Components";

interface MainNavigationProps {
   icon: string
}

const menuItems: NavigationProps["menuItems"] = [
   {label: 'Home', link: "/", style: "active"},
   {label: 'Shop', link: "/Shop", style: "normal"},
   {label: 'Contact Us', link: "/contact", style: "normal"},
   {label: 'About Us', link: "/aboutus", style: "normal"},
];
const MainNavigation = (props: MainNavigationProps) => {
   return (
      <section className={`w-full container mx-auto flex flex-row justify-around absolute top-5 left-0 z-10`}>
         <Navigation
            theme="header"
            menuItems={menuItems}
         />
         <CartIcon icon={props.icon}/>
      </section>
   );
}
export default MainNavigation