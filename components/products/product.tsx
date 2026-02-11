import { HiMiniArrowLongRight } from "react-icons/hi2";
import React from 'react'
import ProductDetail from "./productDetail";
import { products } from "../constants";

const Products = () => {
  return (
    <div className="my-8">
    <div className="flex items-center justify-between">
        <span className="block text-text-primary font-medium text-[40px]">Popular Products</span>
        <div className="flex gap-2 items-center text-[28px] underline">
            <span>Show More</span>
            <HiMiniArrowLongRight />
        </div>
    </div>

    <div className="grid grid-cols-4 gap-12 my-5">
       {
        products.map((val) =>{
            return  <ProductDetail key={val.id} product={val} />
        })
       }
    </div>
    </div>
  )
}

export default Products