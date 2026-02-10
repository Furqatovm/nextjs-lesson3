import { Input } from 'antd'
import Image from 'next/image'
import { HeartOutlined  } from '@ant-design/icons';
import { FiShoppingBag } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";



const Header = () => {
  return (
    <header className='flex justify-between items-center'>
        <img src="/logo.png" alt="" />
        <nav className='w-[45%] flex items-center justify-between'>
            <span className='text-[27px] text-text-primary'>About</span>
            <span className='text-[27px] text-text-primary'>Shop</span>
            <span className='text-[27px] text-text-primary'>Categories</span>
            <span className='text-[27px] text-text-primary'>Help</span>
        </nav>
        <div className='flex gap-6 items-center'>
            <Input className='bg-[#D9D9D9]! border-[#D9D9D9]! text-text-primary rounded-2xl!' placeholder='Search for “Phones”' prefix={<FiSearch size={22} />}  />
           <div className='flex gap-6 items-center text-[34px]'>
           <HeartOutlined />
           <FiShoppingBag />
           </div>
        </div>
    </header>
  )
}

export default Header