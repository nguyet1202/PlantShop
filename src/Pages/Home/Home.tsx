import * as React from "react";
import {HomeHeader} from "./HomePageHeader";
import {HomeMainContent} from "./index";
import {Footer} from "../Layouts";

const Home = () => {
   return (
      <main>
         <HomeHeader/>
         <HomeMainContent/>
         <Footer/>
      </main>
   );
}
export default Home


