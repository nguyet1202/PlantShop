import React from "react";
import "../../styles/BannerContent.scss"
import {FiSearch} from "react-icons/fi";
import {SearchBar} from "../../../../Components";

interface BannerContentProps {

}

const BannerContent = () => {
   return (
      <div className={`textContent`}>
         <h1 className={`textContent__title`}>
            Bring Serenity to Your Place With Interior Plants
         </h1>
         <div className={`textContent__button`}>
            <SearchBar theme="primary" size="md" label="Search plant" icon={<FiSearch size={25}/>}/>
         </div>
      </div>
   )
}
export {type BannerContentProps}
export default BannerContent;