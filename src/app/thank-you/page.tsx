import React from 'react'
import Image from 'next/image'
import TySeal from './components/TySeal';
import TyGrid from './components/TyGrid';
import Footer from '../components/Footer';

export default function page() {
  return (
    <>
      <div className='mx-auto flex justify-center mb-40'>
        <div className="flex p-5 md:p-20 flex-col items-center md:flex-row md:w-full bg-gray-100">

          <Image
            className="image object-cover md:w-4/12 rounded-t-lg"
            src="/2bootle-fruits.png"
            width={300}
            height={300}
            priority
            alt="..."
          />

          <div className="flex flex-col justify-between p-4 leading-normal md:px-20 w-full md:w-7/12">
            <h5 className="text-5xl font-bold tracking-tight text-center md:text-left ">Thank You & Congratulations!</h5>
            <p className="mt-5 mb-2 font-normal text-center md:text-left">Your credit card will show a charge from Digistore 24, a retailer of products on this site.</p>

            <p className="mt-5 mb-2 font-normal text-center md:text-left">We strive to ship every order in 48 hours or less and you will receive a shipment notification from Digistore 24 as soon as that happens.</p>

            <p className="mt-5 mb-2 font-normal text-center md:text-left">Please allow 3-5 business days for US shipping and 7-14 days for international shipping (sometimes there are COVID-related delays when crossing international borders).</p>
            <p className="mt-5 mb-2 font-normal text-center md:text-left">For any questions regarding your order, please contact us:</p>
            <p className="mt-5 mb-2 font-normal text-center md:text-left">support@getprostaflow.com</p>


            <div className="mt-10">
              <p className='font-bold'>Craig Shultz Creator, ProstaFlow</p>

            </div>
            <div className="">
              <Image
                src="/signature.png"
                className='w-[250px]'
                width={1500}
                height={0}
                priority
                alt="..."
              />
            </div>

          </div>
        </div>
      </div>

      <TySeal />
      <TyGrid />
      <Footer />
    </>
  )
}
