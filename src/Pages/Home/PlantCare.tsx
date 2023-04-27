import React from "react";
import "./styles/PlantCare.scss"
import {Button} from "../../Components";
import {CardImages} from "../../Components";

const PlantCare = () => {
   return (
      <section className="plantCare">
         <div className="plantCare__title">
            <h1 className="plantCare__title__main">How to care for plants</h1>
            <div className="plantCare__title__Contentnavigation">
               <a className="">Take care of plants with all your heart </a>
            </div>
         </div>
         <div className="plantCare__display">
            <div className="plantCare__display__sideLeft">
               <div>
                  <Button theme="secondary" size="sm" label="Adjust Lighting"
                          description="When caring for indoor plants, make sure the room temperature is neither too cold nor too hot"
                          icon={<img src="/images/icons/sun.png" alt="Shapping icon"/>}/>
                  <Button theme="secondary" size="sm" label="Don't water too often"
                          description="Watering ornamental plants indoors does not have to be done every day."
                          icon={<img src="/images/icons/water.png" alt="Shapping icon"/>}/>
                  <Button theme="secondary" size="sm" label="Don't water too often"
                          description="Watering ornamental plants indoors does not have to be done every day."
                          icon={<img src="/images/icons/tree.png" alt="Shapping icon"/>}/>
                  <Button theme="secondary" size="sm" label="Fertilize regularly"
                          description="The nutrients most indoor houseplants need are nitrogen for balance and potassium for stem strength"
                          icon={<img src="/images/icons/temperature.png" alt="Shapping icon"/>}/>
               </div>
            </div>

            <div className="plantCare__display__sideRight">
               <CardImages image="./images/care.png" theme="primary" size="xs"/>
            </div>
         </div>
      </section>
   )
}
export default PlantCare;