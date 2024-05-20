import React from 'react'
import Image from 'next/image'

export default function Customer() {
  return (
    <>
      <div className='md:w-9/12 mx-auto mt-24'>
        <h1 className='headline font-bold text-center mb-2 md:mb-8'>
          Real Customers Real Life Changing Results
        </h1>
      </div>

      <div className="flex justify-center p-8 md:p-0 md:w-10/12 mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

          <div className="flex flex-col items-center">
            <Image
              src="/user1.jpg"
              className='image w-full h-auto rounded-lg'
              width={500}
              height={500}
              priority
              alt="..."
            />
          </div>


          <div className="flex flex-col items-center">
            <Image
              src="/user2.jpg"
              className='image w-full h-auto rounded-lg'
              width={500}
              height={500}
              priority
              alt="..."
            />
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/user3.jpg"
              className='image w-full h-auto rounded-lg'
              width={500}
              height={500}
              priority
              alt="..."
            />
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/user4.jpg"
              className='image w-full h-auto rounded-lg'
              width={500}
              height={500}
              priority
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  )
}
