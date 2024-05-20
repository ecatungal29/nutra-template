import React from 'react'
import Image from 'next/image'

export default function ArrowSection() {
  return (
    <>
      <div className='mx-auto flex justify-center mt-5'>
        <a href="#" className="w-11/12 md:w-9/12 mx-auto p-10 items-center border rounded-3xl bg-gradient-to-t from-[#544080] to-[#26144d]">

          <div className="md:p-5 md:w-10/12 mx-auto">
            <p className="text-center mb-2 font-semibold text-white text-2xl md:text-4xl">Yes, you read that correctly</p>
            <p className="text-center mb-3 font-normal text-gray-200 mt-5">
              On this page we&lsquo;re offering our VIP customers such as yourself a one-time only opportunity to add an additional THREE BOTTLES to your order at the most outrageous discount we will EVER offer...
            </p>
            <p className="text-center font-semibold text-white text-2xl md:text-5xl mt-10 mb-10">$29 per bottle!</p>
          </div>

          <div className="flex justify-center -mb-20">
            <Image
              src="/down-arrow-blue.png"
              className='w-[100px] h-[100px] rounded-full border-white border-4'
              width={1500}
              height={1500}
              priority
              alt="..."
            />
          </div>
        </a>
      </div>


    </>
  )
}
