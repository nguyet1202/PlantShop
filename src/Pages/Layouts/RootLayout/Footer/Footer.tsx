import "./styles/Footer.scss"
import {Support, Address, UsefulLink, Menu} from "./index";
import {SearchBar} from "../../../../Components";


const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer__main">
            <div className="footer__main__content">
               <div className="footer__main__content__emailbutton">
                  <h1 className="footer__main__content__emailbutton__title">News latter</h1>
                  <SearchBar label="Enter your email" theme="secondary" size="lg" description="Subscribe"/>
               </div>
               <div className="footer__main__content__navigation">
                  <Support/>
                  <UsefulLink/>
                  <Menu/>
                  <Address/>
               </div>
            </div>
            <div className="footer__main__sideNote">
               <p>© 2023 Nguyet - All rights reserved.</p>
            </div>
         </div>
      </footer>
   )
}
export default Footer;