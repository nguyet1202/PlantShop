import "./styles/BestSellerProduct.scss"
import {ProductCard} from "../../Components";
import {FiPlus, FiArrowRight} from "react-icons/fi";
import dataProducts from "../../Components/Data/BestSellerProduct";
import React from "react";
const BestSellerProduct = () => {
   return (
      <section className={`bestSell`} >
         <div className="bestSell__title">
            <h1 className="bestSell__title__main">Best Seller Product</h1>
            <div className="bestSell__title__Contentnavigation">
               <a className="">See all collection </a>
               <FiArrowRight size={25}/>
            </div>
         </div>
            <div className="bestSell__productList">
               {dataProducts.map((product, index) => (
                  <ProductCard
                     key={index}
                     id={product.id}
                     productName={product.productName}
                     productImage={product.productImage}
                     rateValue={product.rateValue}
                     price={product.price}
                     icon={<FiPlus size={25} color="white" />}
                  />
               ))}
         </div>
      </section>
   )
}
export default BestSellerProduct