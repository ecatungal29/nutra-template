import React from 'react'
import Image from 'next/image'

export default function Creator() {
  return (
    <>
      <div className='w-11/12 md:w-9/12 mx-auto mt-10 bg-[#25283b] text-white rounded-3xl p-8 text-center text-lg shadow-md'>
        <h1 className='headline font-bold text-center mb-9'>The #1 Rated Prostate Formula</h1>
        <p className="py-3">The biggest question I get asked is, what happens if my prostate health doesn&lsquo;t improve or I don&lsquo;t see results?</p>
        <p className="py-3">ProstaFlow has helped thousands safely assist their prostate health and urinary system...</p>
        <p className="py-3">Quickly, easily and from home.</p>
        <p className="py-3">Despite this, I fully understand if you&apos;re still uncertain. So to take the risk out of ordering...</p>
        <p className="py-3">Every bottle of ProstaFlow comes with a full 60-day guarantee. You can try it out and see its improving effects on your blood sugar with absolutely no-risk whatsoever!</p>
        <div className="flex justify-center items-center mt-10">
          <p className="font-bold">Craig Shultz Creator, ProstaFlow</p>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="/signature_white.png"
            className='w-[300]'
            width={300}
            height={0}
            priority
            alt="..."
          />
        </div>
      </div>
    </>
  )
}
