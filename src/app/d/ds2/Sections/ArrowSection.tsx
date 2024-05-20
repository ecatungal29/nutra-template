import React from 'react'
import Image from 'next/image'

export default function ArrowSection() {
  return (
    <>
      <div className='mx-auto flex justify-center mt-5'>
        <a href="#" className="w-11/12 md:w-9/12 mx-auto p-10 items-center border rounded-3xl bg-gradient-to-t from-[#544080] to-[#26144d]">

          <div className="md:p-5 md:w-8/12 mx-auto">
            <p className="text-center mb-2 font-semibold text-white text-2xl md:text-4xl">
              Take Advantage & Get 3 Additional Bottles At Just
            </p>

            <p className="text-center font-semibold text-white text-2xl md:text-5xl mt-10 mb-4">$33 per bottle!</p>
            <p className="text-center font-normal text-2xl text-gray-200 mb-10">Plus Extra Exciting Bonuses!</p>

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
