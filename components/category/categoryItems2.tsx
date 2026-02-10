"use client"

import { Button } from 'antd'
import React, { useState } from 'react'
import { CategoryItemType2 } from '../constants'

const CategoryItems2 = ({product}: {product:CategoryItemType2}) => {
    const [hover, setHover] =useState<boolean>(false)
  return (
    <div className='bg-[#fafafa] overflow-hidden flex flex-col items-center p-8 rounded-2xl border border-[#EFEFEF]' onMouseEnter={() =>setHover(true)} onMouseLeave={() =>setHover(false)}>
        <h2 className='text-[48px] font-medium text-text-primary text-center '>{product.title}</h2>
        <h3 className='text-[26px] text-text-primary'>{product.description}</h3>
        <div className='w-full flex flex-col items-center h-60'>
            <img src={`${product.img}`} className='w-full h-full object-contain' alt="" />
            <Button 
  className={`text-[22px]! rounded-[34px]! text-white! text-center! flex! items-center! justify-center! border-transparent! bg-[#D75300]! transition-all duration-300 
    ${hover ? "translate-y-0" : "translate-y-20"}`}
>
  Shop Now
</Button>        </div>
    </div>
  )
}

export default CategoryItems2