import React from 'react'
import { HiMiniArrowLongRight } from "react-icons/hi2"
import { Blogtype } from '../constants'


const BlogChild = ({product}: {product: Blogtype}) => {
  return (
    <div className='text-text-primary my-8 flex flex-col gap-2'>
        <div className='h-105'>
        <img src={`${product.img}`} className='rounded-[18px] object-cover h-full ' alt="" />
        </div>
        <h4 className='text-[27px]'>{product.title}</h4>
        <div className='flex justify-between items-center'>
            <span className='text-[#5E5E5E]  text-[24px] font-light'>{product.date}</span>
            <div className="underline text-[#5E5E5E] font-light flex items-center gap-1">
                <span>Show More</span>
                <HiMiniArrowLongRight />
            </div>
        </div>
    </div>
  )
}

export default BlogChild