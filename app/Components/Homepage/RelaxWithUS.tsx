import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import gulmargTemple from '@/public/Homepage/gulmargTemple.jpg'

const RelaxWithUS = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-900 py-16 sm:px-[10vw]">
      <div className="grid sm:grid-cols-2 px-3 gap-3">
        <div className="flex flex-col items-start justify-center gap-3 sm:pr-3">
          <h3 className=" text-4xl  font-extrabold text-gray-900 dark:text-white">
            Relax with Us
          </h3>
          <p className="mb-5 font-light text-gray-500 text-md dark:text-gray-400">
          We got you covered, drive yourself or have a  personal driver
        while you enjoy the views   
          </p>
          <div>
            <Link href={'/contact'} className="bg-primary hover:text-primary hover:bg-white hover:drop-shadow-lg text-white px-6 py-2 rounded-full shadow-sm mt-6">
              {" "}
              Contact Us
            </Link>
          </div>
        </div>
        <div>
          <Image src={gulmargTemple} alt={"Gulmarg Temple"} />
        </div>
      </div>
    </div>
  )
}

export default RelaxWithUS