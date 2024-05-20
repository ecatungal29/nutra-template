import Link from 'next/link'
import React from 'react'

export default function TopBanner() {
  return (
    <div className="md:mb-5 text-center bg-gradient-to-t from-[#b9c4d8] via-[#f5f7fd] to-[#f5f7fd] py-3 px-3 w-full md:w-9/12 mx-auto md:rounded-md">
      <span className="text-red-600 mr-1">
        <Link href="/">IMPORTANT HEALTH UPDATE </Link>
      </span>
      <span className="text-gray-900">
        May take up to 10 seconds to load. Make sure your sound is on.
      </span>
    </div>
  )
}
