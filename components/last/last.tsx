import React from 'react'

const LastPage = () => {
  return (
    <div className='bg-[#F8F8F8] border border-[#EEEEEE] h-[60vh] overflow-hidden rounded-[53px] p-10  flex justify-between items-center relative text-text-primary'>
        <div className='w-[50%]'>
          <img src="/bgphone.png" className='absolute left-0' alt="" />
              <span className='text-[30px]'>galaxy sale is live now</span>
              <h4 className='text-[4rem] text-text-primary font-bold'>Galaxy S24 | S24+</h4>
              <p className='text-[25px] font-light'>Get up to $1,000 in trade-in credit from participating carriers. Terms apply.</p>
        </div>
        <div className='absolute right-0'>
            <img src="/phones.png" className='w-85' alt="" />
        </div>
    </div>
  )
}

export default LastPage