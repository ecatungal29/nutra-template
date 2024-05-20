import React from 'react'
import Image from "next/image";

export default function GridImage() {
  return (
    <div className='lg:w-9/12 mx-auto mt-24'>
      <h1 className='headline p-2 md:p-1 text-center font-bold'>Inside Every <span className='font-bold text-red-600'>ProstaFlow</span> Capsule You&lsquo;ll Find:</h1>
      <h3 className='text-xl p-5 md:p-1 md:text-2xl md:mb-10 text-center'>100% natural and unique ingredients that are clinically proven to support the
        health of your prostate and urinary system</h3>


      <div className="flex justify-center p-8 md:p-0">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          <div className="flex flex-col items-center">
            <Image
              src="/Nori_Yaki_Extract_Powder.jpg"
              className='w-[200px] rounded-full border-slate-200 border-8'
              width={900}
              height={900}
              priority
              alt="..."
            />

            <p className="text-center font-bold mt-2 bg-gray-900 text-white px-4 md:text-xl md:px-8 py-2 rounded-md">Nori Yaki Extract Powder</p>
            <ul className="max-w-md space-y-1 md:text-base mt-2 list-inside">
              <li className="flex items-center">
                <svg className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Supports prostate repair
              </li>
              <li className="flex items-center">
                <svg className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Maintains healthy urinary system
              </li>
            </ul>
          </div>



          <div className="flex flex-col items-center">
            <Image
              src="/Wakame_Extract.jpg"
              className='w-[200px] rounded-full border-slate-200 border-8'
              width={900}
              height={900}
              priority
              alt="..."
            />

            <p className="text-center font-bold mt-2 bg-gray-900 text-white px-4 md:text-xl md:px-8 py-2 rounded-md">Wakame Extract</p>
            <ul className="max-w-md space-y-1 md:text-base mt-2 list-inside">
              <li className="flex items-center">
                <svg className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Supports normal function of the bladder
              </li>
              <li className="flex items-center">
                <svg className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Strong antibacterial properties
              </li>
            </ul>
          </div>


          <div className="flex flex-col items-center">
            <Image
              src="/kelppowder.jpg"
              className='w-[200px] rounded-full border-slate-200 border-8'
              width={900}
              height={900}
              priority
              alt="..."
            />

            <p className="text-center font-bold mt-2 bg-gray-900 text-white px-4 md:text-xl md:px-8 py-2 rounded-md">Kelp Powder</p>
            <ul className="max-w-md space-y-1 md:text-base mt-2 list-inside">
              <li className="flex items-center">
                <svg className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Keeps the system toxin-free
              </li>
              <li className="flex items-center">
                <svg className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Supports a strong urine flow
              </li>
            </ul>
          </div>




          <div className="flex flex-col items-center">
            <Image
              src="/bladderwrack.jpg"
              className='w-[200px] rounded-full border-slate-200 border-8'
              width={900}
              height={900}
              priority
              alt="..."
            />

            <p className="text-center font-bold mt-2 bg-gray-900 text-white px-4 md:text-xl md:px-8 py-2 rounded-md">Bladderwrack Powder</p>
            <ul className="max-w-md space-y-1 md:text-base mt-2 list-inside">
              <li className="flex items-center">
                <svg className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Strengthens prostate cell
              </li>
              <li className="flex items-center">
                <svg className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Supports healthy libido levels
              </li>
            </ul>
          </div>




          <div className="flex flex-col items-center">
            <Image
              src="/SawPalmetto.jpg"
              className='w-[200px] rounded-full border-slate-200 border-8'
              width={900}
              height={900}
              priority
              alt="..."
            />

            <p className="text-center font-bold mt-2 bg-gray-900 text-white px-4 md:text-xl md:px-8 py-2 rounded-md">Saw Palmetto</p>
            <ul className="max-w-md space-y-1 md:text-base mt-2 list-inside">
              <li className="flex items-center">
                <svg className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Kidney supporting properties
              </li>
              <li className="flex items-center">
                <svg className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Strong antimicrobial
              </li>
            </ul>
          </div>




          <div className="flex flex-col items-center">
            <Image
              src="/pomegranate.jpg"
              className='w-[200px] rounded-full border-slate-200 border-8'
              width={900}
              height={900}
              priority
              alt="..."
            />

            <p className="text-center font-bold mt-2 bg-gray-900 text-white px-4 md:text-xl md:px-8 py-2 rounded-md">Pomegranate Extract</p>
            <ul className="max-w-md space-y-1 md:text-base mt-2 list-inside">
              <li className="flex items-center">
                <svg className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Maintains healthy blood flow
              </li>
              <li className="flex items-center">
                <svg className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Supports testosterone levels
              </li>
            </ul>
          </div>








          <div className="flex flex-col items-center">
            <Image
              src="/Iodine.jpg"
              className='w-[200px] rounded-full border-slate-200 border-8'
              width={900}
              height={900}
              priority
              alt="..."
            />

            <p className="text-center font-bold mt-2 bg-gray-900 text-white px-4 md:text-xl md:px-8 py-2 rounded-md">Iodine</p>
            <ul className="max-w-md space-y-1 md:text-base mt-2 list-inside">
              <li className="flex items-center">
                <svg className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Supports the urinary tract
              </li>
              <li className="flex items-center">
                <svg className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Maintains healthy prostate function
              </li>
            </ul>
          </div>





          <div className="flex flex-col items-center">
            <Image
              src="/Shilajit.jpg"
              className='w-[200px] rounded-full border-slate-200 border-8'
              width={900}
              height={900}
              priority
              alt="..."
            />

            <p className="text-center font-bold mt-2 bg-gray-900 text-white px-4 md:text-xl md:px-8 py-2 rounded-md">Shilajit</p>
            <ul className="max-w-md space-y-1 md:text-base mt-2 list-inside">
              <li className="flex items-center">
                <svg className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Strong antioxidant benefits
              </li>
              <li className="flex items-center">
                <svg className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Sleep supporting properties
              </li>
            </ul>
          </div>





          <div className="flex flex-col items-center">
            <Image
              src="/neem.jpg"
              className='w-[200px] rounded-full border-slate-200 border-8'
              width={900}
              height={900}
              priority
              alt="..."
            />

            <p className="text-center font-bold mt-2 bg-gray-900 text-white px-4 md:text-xl md:px-8 py-2 rounded-md">Neem</p>
            <ul className="max-w-md space-y-1 md:text-base mt-2 list-inside">
              <li className="flex items-center">
                <svg className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Strong antioxidant benefits
              </li>
              <li className="flex items-center">
                <svg className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Sleep supporting properties
              </li>
            </ul>
          </div>












        </div>
      </div>
    </div>
  )
}
