import React from 'react'
import googleImg from "public/GetItOnGooglePlay_Badge_Web_color_English-XvR5LaEp.png"
import appleImg from "public/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
import upin from "public/upin.png"
import Image from "next/legacy/image"
import Link from 'next/link'
import bgImg from "public/Screen Shot 2020-03-12 at 9.26.39 AM.png";
const GetTheApp = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-[#22d0a5] p-4 sm:p-10">
          <div className="absolute inset-0 top-20 -z-0 w-screem">
            <Image
              src={bgImg}
              layout="fill"
              objectFit="cover"
              alt="Background image"
              className="opacity-10 z-0"
            />
      </div>
          <div className="w-full sm:w-2/3 h-auto p-6 sm:p-10 border-2 border-black text-center bg-white backdrop-blur-md rounded-3xl shadow-lg">
            <div className="flex justify-center mt-[-60px] sm:mt-[-90px] mb-10 sm:mb-20">
              <Image
                src={upin}
                height={200}
                width={200}
                alt="main image of upin"
                className="w-32 h-32 sm:w-48 sm:h-48 rounded-2xl"
              />
            </div>
            <h1 className="font-extrabold text-4xl sm:text-6xl">Upin</h1>
            <p className="mt-4 text-xl sm:text-2xl">
              Create. Join. Connect.
            </p>
           
    
            <div className="flex justify-center m-5">
              <Link
                href="https://play.google.com/store/apps/details?id=com.benhavis.upinjtyc832ezysr5qkcjpax"
              >
                <Image
                  src={googleImg}
                  height={60}
                  alt="get it on google"
                  width={200}
                  className="w-40 sm:w-48"
                />
              </Link>
            </div>
    
            <div className="flex justify-center m-5 ">
              <Link
                href="https://apps.apple.com/us/app/upin/id1341978328"
              >
                <Image
                  src={appleImg}
                  alt="Download from the App Store"
                  height={200}
                  width={200}
                  className="w-40 sm:w-48"
                />
              </Link>
            </div>
          </div>
        </div>
      );
    }

export default GetTheApp