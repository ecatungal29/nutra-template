import React from 'react'
import Image from 'next/image'
import { HiOutlineCheck } from "react-icons/hi";

export default function BigBottleTwo() {
  return (
    <div className='mx-auto flex justify-center mt-10 mb-40'>
      <div className="flex p-5 md:p-20 flex-col items-center md:flex-row md:w-full bg-gray-100">

        <Image
          className="md:w-6/12 rounded-t-lg"
          src="/bootle-fruits2.png"
          width={400}
          height={1}
          priority
          alt="..."
        />

        <div className="flex flex-col justify-between p-4 leading-normal md:px-0 w-full md:w-6/12">
          <h5 className="text-3xl font-bold md:text-left ">
            Are you constantly fatigued, experiencing bouts of forgetfulness, or irritable due to prostate-related issues?
          </h5>
          <p className="mt-5 mb-2 text-lg font-normal md:text-left">
            Say goodbye to these discomforts and reclaim your vitality with ProstaFlow! Our ground-breaking supplement
            has been intricately designed to support prostate health, ensure all day energy, and boost your cognitive
            function. With ProstaFlow, you are setting yourself up for optimal prostate health. Start your journey towards
            a healthier, more energetic, and sharper you today with ProstaFlow!</p>



          <div className="mt-10">
            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex flex-col">
                <p className='flex text-sm'><HiOutlineCheck className='h-5 w-5 mr-1' /> Natural Formula</p>
              </div>
              <div className="flex flex-col">
                <p className='flex text-sm'><HiOutlineCheck className='h-5 w-5 mr-1' /> Plant Ingredients</p>
              </div>
              <div className="flex flex-col">
                <p className='flex text-sm'><HiOutlineCheck className='h-5 w-5 mr-1' /> Non-GMO</p>
              </div>
              <div className="flex flex-col">
                <p className='flex text-sm'><HiOutlineCheck className='h-5 w-5 mr-1' /> Easy To Swallow</p>
              </div>
              <div className="flex flex-col">
                <p className='flex text-sm'><HiOutlineCheck className='h-5 w-5 mr-1' /> Non-Habit Forming</p>
              </div>
              <div className="flex flex-col">
                <p className='flex text-sm'><HiOutlineCheck className='h-5 w-5 mr-1' /> Natural Formula</p>
              </div>
            </div>
          </div>

          <div className='mt-8 flex'>
            <div className="md:w-96 w-64 text-black shadow-md hover:cursor-pointer bg-gradient-to-t from-[#d9ba40] via-[#facb16] to-[#facb16] font-bold rounded-full text-lg px-5 py-4 text-center mx-6">ORDER NOW!</div>
          </div>
        </div>
      </div>
    </div>
  )
}
