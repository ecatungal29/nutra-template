import React from 'react'

export default function page() {
  return (
    <div className='w-10/12 md:w-9/12 mx-auto'>

      <h1 className='text-center font-bold text-4xl mt-10 mb-5'>
        We Take Spam Seriously
      </h1>

      <p className='mt-5'>In the context of electronic messaging, spam refers to unsolicited, bulk, or indiscriminate messages typically sent for a commercial purpose.</p>
      <p className='mt-5'>We provide a facility that enables users to send email messages / private messages to others. Users must not use this facility to send unsolicited, bulk, or indiscriminate messages, whether or not for commercial purposes.</p>
      <p className='mt-5'>Receipt of unwanted messages from our company: In the unlikely event that you receive any message from us or sent using our systems that may be considered to be spam, please contact us by using the details below and the matter will be investigated.</p>




      <div className='w-full md:w-8/12 mx-auto'>
        <p className='mt-10 text-center mb-10'>If you got an unsolicited marketing email or text
          enter your email address or phone number below and click
          &quot;Remove Me&quot; to be added to our &quot;DO NOT CONTACT&quot; file.</p>
      </div>


      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div >
        <div className="mb-5" >
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" > Your phone</label >
          <input type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" > Unsubscribe</button >
      </form >


      <hr className='mt-10' />
      <div className='w-full md:w-10/12 mx-auto'>
        <p className='mt-10 text-center text-sm text-gray-600'>The information on this website has not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure or prevent any disease.</p>
        <p className='mt-5 text-center text-sm text-gray-600 mb-4'>&copy; ProstaFlow Research 2024 All Rights Reserved.</p>
      </div>



    </div>

  )
}
