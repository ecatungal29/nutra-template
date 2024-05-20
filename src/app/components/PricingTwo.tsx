import React from 'react'
import Image from 'next/image'

export default function PricingTwo() {
  return (
    <>
      <div className="flex flex-col mx-auto max-w-lg text-center bg-[#fff] shadow-md rounded-lg zoom-on-hover relative">
        <div className="ribbon"><span>BEST VALUE</span></div>

        <div className='bg-gradient-to-r from-[#294773] via-[#33578e] to-[#294773] p-8 rounded-t-lg'>
          <h3 className="mb-1 text-4xl font-bold text-[#9fc5ff]">6 Bottles</h3>
          <p className="sm:text-lg text-[#9fc5ff]">180 Day Supply</p>
        </div>

        <div className='p-8'>
          <div className='bg-gradient-to-t from-[#b9c4d8] via-[#b9c4d8] to-[#c8d3e9] w-80 h-80 mx-auto rounded-full flex items-center justify-center my-8'>
            <Image
              src="/prostaflowRx6-500px.png"
              className=''
              width={280}
              height={0}
              priority
              alt="..."
            />
          </div>

          <div className="flex justify-center items-baseline">
            <span className="mr-2 text-5xl font-extrabold">$49</span>
            <span className="text-gray-700">/Per Bottle</span>
          </div>

          <p className='mt-5 font-semibold'>YOU SAVE $780</p>
          <p className='mb-5'>+ 2 FREE E-BOOKS</p>

          <div className="text-black shadow-md hover:cursor-pointer bg-gradient-to-t from-[#d9ba40] via-[#facb16] to-[#facb16] font-bold rounded-full text-lg px-5 py-4 text-center">ADD TO CART</div>          <p className='text-sm mt-2'>60 Day Money-Back Guarantee</p>
          <div className="flex justify-center items-center">
            <Image
              src="/cards.png"
              className='image'
              width={200}
              height={300}
              priority
              alt="..."
            />
          </div>

          <p className='text-sm mt-3'>
            TOTAL: <del className="text-red-500">$1074</del> $294
          </p>
          <p className='text-sm font-semibold'>
            + FREE US SHIPPING
          </p>
        </div>
      </div>


    </>

  )
}
