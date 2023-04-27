import {ComponentSize} from "../../Types";
import "./style/CardImage.scss"
interface CardImagesProps {
   title?: string
   image: string
   theme: "primary" | "secondary"
   size ? : ComponentSize
}

const CardImage = (props: CardImagesProps) => {
   return (
      <div className={`imageCard imageCard--${props.theme} imageCard--${props.size}`}>
         <img className={`imageCard--${props.theme}__image imageCard--${props.size}__image`}  src={props.image} alt="image"/>
         <div className={`imageCard--${props.theme}__title`}>
            <h4>{props.title}</h4>
         </div>
      </div>
   )
}
export default CardImage