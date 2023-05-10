import * as React from "react";

interface CartIconProps {
   icon: string
}

const CartIcon = (props: CartIconProps) => {
   return (
      <img className="cursor-pointer text-black" src={props.icon} alt="Cart icon"/>
   )
}
export default CartIcon