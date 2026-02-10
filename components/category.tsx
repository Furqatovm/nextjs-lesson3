

import { HiMiniArrowLongRight } from "react-icons/hi2";
import CategoryItems from "./categoryItems";
import { categoryitem, categoryItems2 } from "./constants";
import CategoryItems2 from "./category/categoryItems2";

const Category = () => {
  return (
    <div>
        <div className="flex items-center justify-between">
            <span className="block text-text-primary font-medium text-[40px]">Trending Categories</span>
            <div className="flex gap-2 items-center text-[28px] underline">
                <span>Show More</span>
                <HiMiniArrowLongRight />
            </div>
        </div>

        <div className="grid grid-cols-5 gap-10 my-8">
            {
                categoryitem.map((val) =>{
                    return <CategoryItems key={val.id} items={val} />
                })
            }
        </div>

        <div className="grid grid-cols-2 gap-8">
            {
                categoryItems2.map((val) =>{
                    return <CategoryItems2 key={val.id} product ={val} />
                })
            }
        </div>
    </div>
  )
}

export default Category