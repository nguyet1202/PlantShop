import React from "react";
import "../styles/BannerContent.scss"
import {FiSearch} from "react-icons/fi";
import {SearchBar} from "../../../Components";

interface BannerContentProps {

}

const BannerContent = () => {
   return (
      <div className={`textContent`}>
         <h1 className={`textContent__title`}>
            Bring Serenity to Your Place With Interior Plants
         </h1>
         <p className={`textContent__description`}>
            find your dream plant for you home decoration with us, and we will make it happen.
         </p>
         <SearchBar theme="primary" size="md" label="Search plant" icon={<FiSearch size={25}/>}/>
      </div>
   )
}
export {type BannerContentProps}
export default BannerContent;