import {BannerHeader} from "./BannerHeader";
import {MainNavigation} from "../../Layouts";

const HomeHeader = () => {
   return (
      <header className={`relative`}>
         <MainNavigation icon="./images/icons/cartIcon.png"/>
         <BannerHeader/>
      </header>
   )
}
export default HomeHeader