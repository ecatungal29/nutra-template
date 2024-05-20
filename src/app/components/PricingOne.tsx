'use client'

import React, { Fragment, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Dialog, Transition } from '@headlessui/react'

export default function PricingOne() {

  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)


  const handleClick = (value: any) => {
    setOpen(value);
  };


  return (
    <div className='py-8'>
      <div className="flex flex-col mx-auto max-w-lg text-center text-gray-900 bg-gray-100 rounded-lg shadow-md zoom-on-hover">

        <div className='bg-[#25283b] p-8 rounded-t-lg'>

          <h3 className="text-3xl font-bold text-[#bac2d7]">1 Bottle</h3>
          <p className="text-[#bac2d7] sm:text-lg">30 Day Supply</p>
        </div>

        <div className='bg-gradient-to-t from-[#b9c4d8] via-[#b9c4d8] to-[#c8d3e9] w-80 h-80 mx-auto rounded-full flex items-center justify-center my-8'>
          <Image
            src="/prostaflowx1-500px.png"
            className=''
            width={140}
            height={0}
            priority
            alt="..."
          />
        </div>


        <div className="flex justify-center items-baseline">
          <span className="mr-2 text-5xl font-extrabold">$69</span>
          <span className="text-gray-500 dark:text-gray-400">/Per Bottle</span>
        </div>

        <p className='mt-5 font-semibold'>YOU SAVE $110</p>
        <p className='mb-5'>+ 2 FREE E-BOOKS</p>

        <div onClick={() => handleClick(true)} className="text-black shadow-md hover:cursor-pointer bg-gradient-to-t from-[#d9ba40] via-[#facb16] to-[#facb16] font-bold rounded-full text-lg px-5 py-4 text-center mx-6">ADD TO CART</div>
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
          TOTAL: <del className="text-red-500">$179</del> $69
        </p>
        <p className='text-sm font-semibold mb-5'>
          + SHIPPING
        </p>
      </div>


      <Transition.Root show={open} as={Fragment}>
        <Dialog className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-0 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full md:w-8/12">
                  <div className="bg-white">

                    <div className='bg-gray-200 p-5'>
                      <h1 className='font-bold text-5xl text-center'>
                        Congratulations!
                      </h1>
                      <p className='text-center mt-2 text-lg'>You qualify to get 1 Free bottle when you purchase just 2 bottles of ProstaFlow</p>
                    </div>



                    <div className="flex justify-center p-8">
                      <div className="grid grid-cols-3 gap-3">
                        <div className="flex flex-col items-center">
                          <Image
                            className="image object-cover rounded-t-lg"
                            src="/2bootles.png"
                            width={300}
                            height={300}
                            priority
                            alt="..."
                          />
                        </div>

                        <div className="flex flex-col items-center justify-center text-9xl font-bold">+</div>

                        <div className="flex flex-col items-center">
                          <Image
                            className="image object-cover rounded-t-lg"
                            src="/2bootles.png"
                            width={300}
                            height={300}
                            priority
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>


                    <p className='text-center text-lg font-bold'>*In order to see real lasting results, I highly recommend you grab at least 2 bootles.</p>
                    <div className='w-full flex m-2 mx-auto p-5'>
                      <Link href="/" className="w-full text-black bg-yellow-300 hover:bg-yellow-400 font-semibold rounded-full text-2xl px-5 py-3 text-center">
                        YES! UPGRADE MY ORDER NOW!
                      </Link>
                    </div>
                    <p onClick={() => handleClick(false)} className='hover:cursor-pointer text-center text-base text-gray-600 underline'>No Thanks, I Don&apos;t want to this upgrade!</p>

                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

    </div>
  )
}
