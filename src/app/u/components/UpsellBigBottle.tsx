'use client'
import React, { Fragment, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Dialog, Transition } from '@headlessui/react'

export default function UpsellBigBottle() {
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)


  const handleClick = (value: any) => {
    setOpen(value);
  };

  return (
    <>
      <div className='w-11/12 md:w-9/12 mx-auto mb-32 mt-20 bg-gray-300 border rounded-3xl shadow'>
        <div className='w-full'>
          <h1 className='p-5 md:p-0 mt-10 text-center text-3xl md:text-4xl font-bold'>VIP Customers One-Time Only Opportunity</h1>
        </div>

        <div className="mx-auto flex p-5 items-center flex-col md:flex-row">
          <div className="flex flex-col justify-between p-4 leading-normal md:w-6/12">
            <h5 className="text-center text-3xl font-bold">
              3 BOTTLES FOR JUST <del>$207</del> <span className="text-red-600">$87!</span>
            </h5>

            <p className="text-center mt-5 mb-2 font-normal text-xl">
              Add an Additional 3 BOTTLES at The Outrageous Discount of Just  <del>$69</del> $29 per bottle!Includes Free BonusesIncludes US Free Shipping
            </p>
            <p className="text-center mb-3 mt-3 font-bold text-xl">
              Includes Free Bonuses<br />
              Includes US Free Shipping
            </p>
          </div>

          <Image
            className="image object-cover md:w-6/12 rounded-t-lg"
            src="/sugardefender-upsell-6bootles.png"
            width={300}
            height={300}
            priority
            alt="..."
          />

        </div>


        <div className='w-full'>
          <div className='mx-auto justify-center mt-8 flex'>
            <a href="#" className="w-80 md:w-96 text-black bg-yellow-300 hover:bg-yellow-400 font-semibold rounded-full text-base px-5 py-4 text-center">YES! GIVE ME HUGE SAVINGS</a>
          </div>

          <div className='w-8/12 mx-auto p-3'>
            <Link href="/">
              <p className='text-base mt-1 underline text-center justify-center'>
                Yes, I&lsquo;d like enjoy a steady and powerful urine flow, have more energy
                and finally enjoy a restful sleep. Upgrade my order with the biggest discount.
              </p>
            </Link>
          </div>

          <div className="flex justify-center items-center mb-6">
            <Image
              src="/cards.png"
              className='image'
              width={200}
              height={300}
              priority
              alt="..."
            />
          </div>

          <div className='w-8/12 mx-auto p-3 mb-8'>
            <p onClick={() => handleClick(true)} className=' hover:cursor-pointer hover:text-blue-600 text-sm underline text-center justify-center text-gray-500'>

              No Thanks, I&lsquo;ll Miss Out On This Incredible Upgrade. I Understand That
              When I Order More ProstaFlow, This One-Time-Only Discount And The Bonuses Will
              No Longer Be Available.
            </p>
          </div>
        </div>
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
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
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
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">

                    <div className='bg-gray-200 p-5 rounded-lg'>
                      <h1 className='font-bold text-lg text-center'>
                        WAIT! You must confirm that you are permanently turning down your chance to grab 2
                        additional bottles of ProstaFlow for just $29 each (a savings of $100 off the retail price!)
                      </h1>
                    </div>



                    <div className="mx-auto flex p-5 items-center flex-col md:flex-row">


                      <Image
                        className="image object-cover md:w-4/12 rounded-t-lg"
                        src="/2bootles.png"
                        width={300}
                        height={300}
                        priority
                        alt="..."
                      />

                      <div className="flex flex-col justify-between p-4 leading-normal md:w-8/12">
                        <p className="mt-5 mb-2 font-normal text-base">
                          I understand that this is my ONLY opportunity to load up on ProstaFlow
                          for the special price of $29 per bottle and claim the free shipping and the four
                          valuable bonuses. I know that once I leave this page, when I want to order more
                          Surgar Defender in the future, I&apos;ll have the pay the regular price of $158 and probably
                          shipping costs, too.
                        </p>

                        <p className="mt-5 mb-2 font-normal text-base">
                          I also know I am passing up my opportunity to gell all 4 digital bonuses for free
                          (regular value: $93.33) because they are only available right now, on this private page.
                        </p>
                      </div>

                    </div>




                    <div className='w-full flex m-2 mx-auto p-5'>
                      <Link href="/" className="w-full text-black bg-yellow-300 hover:bg-yellow-400 font-semibold rounded-full text-base px-5 py-3 text-center">
                        YES! PLEASE UPGRADE MY ORDER OF ProstaFlow FOR JUST $33 BOTTLE
                      </Link>
                    </div>

                    <p onClick={() => handleClick(false)} className='hover:cursor-pointer text-center text-sm text-gray-600 underline'>
                      No Thanks, I am happy to miss out and pay full price in the future
                    </p>

                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
