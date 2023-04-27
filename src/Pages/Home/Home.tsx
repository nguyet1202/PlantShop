import * as React from "react";
import {BannerHeader} from "./BannerHeader";
import {PlantShopService} from "./index";
import {BestSellerProduct} from "./index";
import {Reference} from "./index";
import {PlantCare} from "./index";
import {Footer} from "../Layouts";

const Home = () => {
   return (
      <main>
         <BannerHeader/>
         <div className="container max-w-screen-2xl mx-auto px-5">
            <PlantShopService/>
            <BestSellerProduct/>
            <Reference/>
            <PlantCare/>
         </div>
         <Footer/>
      </main>
   );
}
export default Home