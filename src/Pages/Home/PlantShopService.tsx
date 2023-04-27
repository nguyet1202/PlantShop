import {Button} from "../../Components";
import React from "react";
import "./styles/PlantShopService.scss"

const PlantShopService = () => {
   return (
         <section className={`service`}>
            <Button theme="primary" size="sm" label="Search plant" description="No charge for each delivery"
                    icon={<img src="/images/icons/Shapping.png" alt="Shapping icon"/>}/>
            <Button theme="primary" size="sm" label="Search plant" description="100% secure payment"
                    icon={<img src="/images/icons/Payment.png" alt="Payment icon"/>}/>
            <Button theme="primary" size="sm" label="Search plant" description="Quick support"
                    icon={<img src="/images/icons/Support.png" alt="Support icon"/>}/>
         </section>
   )
}
export default PlantShopService