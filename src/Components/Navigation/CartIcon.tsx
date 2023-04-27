import React from 'react';
interface IconProps {
   imageIcon: string
}

const cartIcon = (props: IconProps) => {
   return (
      <img src={props.imageIcon} alt="Cart icon"/>
   );
};

export default cartIcon;