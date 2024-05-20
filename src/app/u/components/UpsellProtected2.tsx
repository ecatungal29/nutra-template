import React from 'react'
import Image from 'next/image'

export default function UpsellProtectedTwo() {
  return (
    <>
      <div className='mx-auto flex justify-center p-5 md:p-0'>
        <div className="p-10 items-center bg-gradient-to-t from-[#384364] to-[#29314A] border rounded-3xl md:w-9/12">
          <div className="flex justify-center -mt-32">
            <Image
              src="/shield3.png"
              className='w-[200px] h-[200px] rounded-full'
              width={1500}
              height={1500}
              priority
              alt="..."
            />
          </div>

          <div className="md:p-5 md:w-10/12 mx-auto">
            <h1 className="text-center mb-2 font-semibold text-white text-2xl md:text-4xl">
              Remember, you&lsquo;re always protected
            </h1>


            <p className="text-center mb-3 font-normal text-gray-200 mt-5">
              By our <span className='font-bold'>Iron-Clad Satisfaction Guarantee...</span> So you have nothing to lose and a whole lot of savings to gain today!
            </p>

            <p className="text-center mb-3 font-normal text-gray-200 mt-5">
              I demand that you are ecstatic about your purchase, not just satisfied. That&apos;s why ProstaFlow is fully guaranteed for 60 days from the date of your purchase.
            </p>

            <p className="text-center mb-3 font-bold text-gray-200 mt-5">
              Every 6 Bottles Order Gets FREE Shipping!
            </p>

            <p className="text-center mb-3 font-normal text-gray-200 mt-5">
              *96% Of Customers Order 3 Bottles (Our Recommended Option)
            </p>


            <div className="flex justify-center">
              <Image
                src="/certifications.png"
                className='w-[320] mt-5'
                width={320}
                height={0}
                priority
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
