import {MainNavigation} from "./index";
import {Footer} from "./index";
interface RootLayoutProps
{

}

function RootLayout(props: RootLayoutProps)
{
   return (
      <main>
         <MainNavigation icon="./images/icons/cartIcon2.png"/>
         <Footer/>
      </main>
   )
}

export default RootLayout