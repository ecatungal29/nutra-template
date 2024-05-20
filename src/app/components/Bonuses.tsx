import React from 'react'
import Image from 'next/image'

export default function Bonuses() {
  return (
    <>


      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">

          <div className="text-center md:text-left max-w-sm bg-gradient-to-r from-[#294773] via-[#33578e] to-[#294773] rounded-lg shadow-md m-4">
            <a href="#">
              <img className="rounded-t-lg" src="/book1.jpg" alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold text-[#9fc5ff]">Free Bonus #1</h5>
              </a>
              <p className="mb-2 font-normal text-[#9fc5ff]">Your Roadmap to Proactive Urological Care</p>

              <p className='text-sm text-[#9fc5ff]'>(instant download)</p>
            </div>
          </div>

          <div className="text-center md:text-left max-w-sm bg-gradient-to-r from-[#294773] via-[#33578e] to-[#294773] rounded-lg shadow-md m-4">
            <a href="#">
              <img className="rounded-t-lg" src="/book2.jpg" alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold text-[#9fc5ff]">Free Bonus #2</h5>
              </a>
              <p className="mb-2 font-normal text-[#9fc5ff]">Revitalize Your Libido</p>

              <p className='text-sm text-[#9fc5ff]'>(instant download)</p>
            </div>
          </div>
        </div>
      </div>


      <div className='mx-auto justify-center mt-4 flex'>
        <a href="/" className="w-96 text-black shadow-md hover:cursor-pointer bg-gradient-to-t from-[#d9ba40] via-[#facb16] to-[#facb16] font-bold rounded-full text-lg px-5 py-4 text-center mx-6">ORDER NOW!</a>

      </div>
      <p className='text-sm mt-2 text-center'>60 Day Money-Back Guarantee</p>
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
    </>
  )
}
