import * as React from "react";
import {PlantShopService} from "./index";
import {BestSellerProduct} from "./index";
import {Reference} from "./index";
import {PlantCare} from "./index";

const HomeMainContent=()=>{
   return(
      <div className="container mx-auto">
         <PlantShopService/>
         <BestSellerProduct/>
         <Reference/>
         <PlantCare/>
      </div>
   )
}
export default HomeMainContent