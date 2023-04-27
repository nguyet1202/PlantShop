import "./styles/MenuItem.scss"

interface MenuItemProps {
   label: string
   link: string
   style?: "active" | "normal" | "other"
}

const MenuItem = (props: MenuItemProps) => {
   return (
      <li className={`itemNav  itemNav--${props.style} `}>
         <a href={props.link}>
            {props.label}
         </a>
      </li>
   )
};
export {type MenuItemProps}
export default MenuItem;