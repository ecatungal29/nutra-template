import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function TyGrid() {
  return (
    <div className='lg:w-7/12 mx-auto mt-24'>
      <h1 className='text-3xl md:text-5xl text-center p-5'>
        Download Your Bonuses!
      </h1>


      <div className="flex justify-center p-8 md:p-0">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">

          <div className='bg-gray-200 p-4 rounded-2xl'>
            <div className="flex flex-col items-center">
              <Image
                src="/kidneyhealth.jpg"
                className='image rounded-lg'
                width={500}
                height={500}
                priority
                alt="..."
              />

              <p className="text-center text-base font-bold mt-2">FREE BONUS #1</p>
              <p className='text-center text-sm'>Kidney Health Revolution</p>
              <Link href='https://designrr.s3.amazonaws.com/doriayufitness_at_gmail.com_318634/living-well-with-kidney-disease-practical-tips-and-advice-for-improved-health_6639d45e.pdf' className='text-center text-blue-600 underline text-sm'>Download Now</Link>
            </div>
          </div>


          <div className='bg-gray-200 p-4 rounded-2xl'>
            <div className="flex flex-col items-center">
              <Image
                src="/RevitalizeYourLibido.jpg"
                className='image rounded-lg'
                width={500}
                height={500}
                priority
                alt="..."
              />

              <p className="text-center text-base font-bold mt-2">FREE BONUS #2</p>
              <p className='text-center text-sm'>Revitalize Your Libido</p>
              <Link href='https://designrr.s3.amazonaws.com/doriayufitness_at_gmail.com_318634/revitalize-your-libido-a-guide-to-rekindling-your-passion-1_663b970b.pdf' className='text-center text-blue-600 underline text-sm'>Download Now</Link>
            </div>
          </div>

          <div className='bg-gray-200 p-4 rounded-2xl'>
            <div className="flex flex-col items-center">
              <Image
                src="/YourRoadmaptoProactiveUrologicalCare.jpg"
                className='image rounded-lg'
                width={500}
                height={500}
                priority
                alt="..."
              />

              <p className="text-center text-base font-bold mt-2">FREE BONUS #3</p>
              <p className='text-center text-sm'>Your Roadmap to Proactive Urological Care</p>
              <Link href='https://designrr.s3.amazonaws.com/doriayufitness_at_gmail.com_318634/the-prostate-health-handbook-strategies-for-prevention-and-treatment-2_663b179b.pdf' className='text-center text-blue-600 underline text-sm'>Download Now</Link>
            </div>
          </div>


          <div className='bg-gray-200 p-4 rounded-2xl'>
            <div className="flex flex-col items-center">
              <Image
                src="/bonus4.jpg"
                className='image rounded-lg'
                width={500}
                height={500}
                priority
                alt="..."
              />

              <p className="text-center text-base font-bold mt-2">FREE BONUS #4</p>
              <p className='text-center text-sm'>Unlocking Longevity</p>
              <Link href='https://designrr.s3.amazonaws.com/doriayufitness_at_gmail.com_318634/the-longevity-plan-strategies-for-a-healthier-life_663b79b2.pdf' className='text-center text-blue-600 underline text-sm'>Download Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
