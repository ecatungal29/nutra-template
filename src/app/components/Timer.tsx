'use client'
import React, { useEffect, useState } from 'react'

export default function Timer() {
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
    <div className='w-11/12 md:w-4/12 mx-auto'>
      <h1 className='shadow-md bg-gradient-to-t from-[#3e69b5] via-[#4576ca] to-[#4474c7] p-6 rounded-xl md:rounded-full text-4xl font-bold text-center text-white'>
        Time left: {`${String(Math.floor(time / 60)).padStart(2, '0')}:${String(time % 60).padStart(2, '0')}`}
      </h1>
    </div>
  )
}
