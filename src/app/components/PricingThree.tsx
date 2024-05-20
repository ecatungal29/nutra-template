import React from 'react'
import Image from 'next/image'

export default function PricingThree() {
  return (

    <div className='py-8'>
      <div className="flex flex-col mx-auto max-w-lg text-center text-gray-900 bg-gray-100 rounded-lg shadow-md zoom-on-hover">

        <div className='bg-[#25283b] p-8 rounded-t-lg'>
          <h3 className="text-3xl font-bold text-[#bac2d7]">3 Bottles</h3>
          <p className="text-[#bac2d7] sm:text-lg">90 Day Supply</p>
        </div>


        <div className='bg-gradient-to-t from-[#b9c4d8] via-[#b9c4d8] to-[#c8d3e9] w-80 h-80 mx-auto rounded-full flex items-center justify-center my-8'>
          <Image
            src="/prostaflowx3-500px.png"
            className='image'
            width={500}
            height={500}
            priority
            alt="..."
          />
        </div>

        <div className="flex justify-center items-baseline">
          <span className="mr-2 text-5xl font-extrabold">$59</span>
          <span className="text-gray-500 dark:text-gray-400">/Per Bottle</span>
        </div>

        <p className='mt-5 font-semibold'>YOU SAVE $360</p>
        <p className='mb-5'>+ 2 FREE E-BOOKS</p>

        <div className="text-black shadow-md hover:cursor-pointer bg-gradient-to-t from-[#d9ba40] via-[#facb16] to-[#facb16] font-bold rounded-full text-lg px-5 py-4 text-center mx-6">ADD TO CART</div>
        <p className='text-sm mt-2'>60 Day Money-Back Guarantee</p>


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
          TOTAL: <del className="text-red-500">$537</del> $177
        </p>
        <p className='text-sm font-semibold mb-5'>
          + FREE US SHIPPING
        </p>

      </div>
    </div>
  )
}
