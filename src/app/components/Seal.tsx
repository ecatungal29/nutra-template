import React from 'react'
import Image from 'next/image'

export default function Seal() {
  return (
    <>
      <div className='mx-auto flex justify-center p-5'>
        <a href="#" className="p-10 items-center bg-gradient-to-t from-[#384364] to-[#29314A] border rounded-3xl md:w-9/12">
          <div className="flex justify-center -mt-32">
            <Image
              src="/seal.png"
              className='w-[200px] h-[200px] rounded-full'
              width={1500}
              height={1500}
              priority
              alt="..."
            />
          </div>

          <div className="md:p-5 md:w-10/12 mx-auto">
            <p className="text-center mb-2 font-semibold text-white text-2xl md:text-4xl">100% Satisfaction Guaranteed 60-Day Money Back Guarantee</p>
            <p className="text-center mb-3 font-normal text-gray-200 mt-5">
              ProstaFlow comes with a 100% money back guarantee - 60 full days from your original purchase. If you&apos;re not
              totally and completely satisfied with our product or your results within the first 60 days simply let us know
              by calling our toll-free number or dropping us an email and we&apos;ll gladly give you a full refund within 48
              hours of the product being returned. That&apos;s right - simply return the product, even your empty bottles,
              anytime within 60 days of your purchase and you&apos;ll receive a full, no-questions-asked refund
              (minus shipping and handling fees).
            </p>
          </div>
        </a>
      </div>
    </>
  )
}
