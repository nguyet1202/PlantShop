import "./styles/Reference.scss"
import {CardImages} from "../../Components";

const Reference = () => {
   return (
      <section className="reference">
         <div className="reference__title">
            <h1 className="reference__title__lineBig">Interior Plant Reference</h1>
            <p className="reference__title__lineSmall">make your home so comfortable with refreshing plants</p>
         </div>
         <div className="reference__card">
            <div className="reference__card__left">
               <CardImages title="living room" image="./images/livingroom.png" theme="primary"/>
               <CardImages title="kitchen" image="./images/kitchen.png" theme="primary"/>
            </div>
            <div className="reference__card__right">
               <CardImages title="bad room" image="./images/bedroom.png" theme="primary"/>
            </div>
         </div>
      </section>
   )
}
export default Reference;