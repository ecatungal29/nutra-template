'use client'
import React, { useEffect, useState } from 'react'

export default function DtcTimer() {
  const [time, setTime] = useState(900);


  useEffect(() => {
    //Timer
    let timer = setInterval(() => {
      setTime((time) => {
        if (time === 0) {
          clearInterval(timer);
          return 0;
        } else return time - 1;
      });
    }, 1000);


  }, []);


  return (
    <div className='lg:w-8/12 mx-auto mt-10'>
      <h1 className='text-3xl md:text-5xl font-bold text-center p-5'>
        Claim your Discounted ProstaFlow Below
        While Stock Lasts
      </h1>

      <div className='w-11/12 lg:w-7/12 mx-auto'>
        <h1 className='bg-red-600 p-6 rounded-xl md:rounded-full text-4xl md:text-5xl font-bold text-center text-white'>
          Time left: {`${String(Math.floor(time / 60)).padStart(2, '0')}:${String(time % 60).padStart(2, '0')}`}
        </h1>
      </div>

    </div>

  )
}
