import Start from '@/public/start'
import React from 'react'
import { ProductType } from '../constants'

const ProductDetail = ({product}:{product:ProductType}) => {
  return (
    <div className='bg-[#f9f9f9] border border-[#F2F2F2] p-6 rounded-4xl flex flex-col  items-center'>
        <div className='h-35'>
        <img src={`${product.img}`} className='w-full h-full object-contain' alt="" />
        </div>
        <div className='flex gap-1 items-center my-3'>
            {
                Array.from({length: product.rate}).map((_, index) =>{
                    return <Start key={index} />
                })
            } 
        </div>
        <span className='text-text-primary font-medium text-center block'>{product.title}</span>
        <span className='text-[#D75300] text-[20px] font-medium block'>{product.discounted_price} <span className='text-[#898989] text-[12px] font-normal line-through'>{product.original_price}</span></span>
    </div>
  )
}

export default ProductDetail