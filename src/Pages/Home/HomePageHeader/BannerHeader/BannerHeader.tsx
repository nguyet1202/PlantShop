import React from 'react';
import {MainNavigation} from "../../../Layouts";
import "../../styles/BannerHeader.scss"
import {BannerContent} from "./index";
interface BannerHeaderProps {

}

const BannerHeader = (props: BannerHeaderProps) => {
   return (
      <section className={`banner`}>
         <BannerContent/>
         <div className="bg-gradient-to-b from-transparent to-white via-transparent h-40 w-full absolute bottom-0"></div>
      </section>
   )
}
export {type BannerHeaderProps}
export default BannerHeader;