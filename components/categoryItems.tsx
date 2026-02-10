import React from 'react'
import { CategoryItemType } from './constants'

const CategoryItems = ({items}:{items:CategoryItemType}) => {
    console.log(items)
  return (
    <div className='flex flex-col justify-between gap-2 items-center'>
        <div className='flex items-center justify-center h-40'>
        <img className='w-full h-full'  src={`${items.img}`} alt="" />

        </div>
        <span className='text-[34px] font-medium text-text-primary'>{items.title}</span>
    </div>
  )
}

export default CategoryItems
