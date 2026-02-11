import React from 'react'
import { HiMiniArrowLongRight } from "react-icons/hi2"
import BlogChild from './blogDetail'
import { blogs } from '../constants'


const Blog = () => {
  return (
    <div>
         <div className="flex items-center justify-between">
            <span className="block text-text-primary font-medium text-[40px]">Our Blogs</span>
            <div className="flex gap-2 items-center text-[28px] underline">
                <span>Show More</span>
                <HiMiniArrowLongRight />
            </div>
        </div>

       <div className='grid grid-cols-3 gap-8'>
      {
        blogs.map((val) =>{
            return <BlogChild key={val.id}  product ={val}/>
        })
      }
       </div>
    </div>
  )
}

export default Blog