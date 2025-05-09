import React from 'react'
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined';
import type { Metadata } from "next";
import bgImg from "@/../public/Screen Shot 2020-03-12 at 9.26.39 AM.png"
import Image from "next/legacy/image";
import Aboutus from './Aboutus';


export const metadata: Metadata = {
  title: "About Us | Upin",
  description: "Generated by create next app",
};

const aboutUs = () => {
  return (
    <div className='relative w-full min-h-screen bg-upinGreen'>
       
      <Image 
        src={bgImg}
        alt='Image of background'
        layout='fill'
        objectFit='cover'
        className=' mix-blend-overlay opacity-20'
      />
      <div className='relative z-10 flex flex-col items-center text-black'>
        
        <div className='flex justify-center pt-16'>
          <h1 className='font-serif text-6xl mr-3 font-extrabold text-black'> <Aboutus /> </h1>         
        </div>
        <div className='flex justify-center mt-5 mb-8 px-8'>
          <p className='text-4xl text-center font-montserrat border border-gray-900 bg-gray-900 rounded-xl p-3 backdrop-filter backdrop-blur-lg bg-opacity-30 text-white'>We believe we are one and we value the importance of connecting with people in real life.</p>
        </div>
        <div className='flex justify-center px-8'>
          <div className='bg-gray-900 border border-gray-900 rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-30 p-6'>
            <p className='font-serif text-2xl text-white'>
              <span className='font-bold text-white'>Our Mission - </span>
              Upin is 100% fully committed to creating the best platform for keeping your real social life in one place. We create the best experience for hosting and joining local activities by making it more convenient, organized, and safe. Our mission is to create more real-life interaction by being able to create & join gatherings of people anywhere at any time. We are focused on creating more peace and oneness amongst each other by being more openly social. With Upin, you will never feel alone again.
            </p>
          </div>
        </div>
        <div className='flex justify-center m-5'>
          <SouthOutlinedIcon className='w-20 h-20'/>
        </div>
        <div className='flex justify-center px-8'>
          <div className='bg-gray-900 border border-gray-900 rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-30 p-6'>
            <p className='font-serif text-2xl text-white'><span className='font-bold text-white'>We Value & Provide -</span> Connection, Relationships, Community. Connection is key to growing in a community. It takes strong relationships to have strong community, and with strong community we grow together in power!</p>
          </div>
        </div>
        <div className='flex justify-center m-5'>
          <SouthOutlinedIcon className='w-20 h-20'/>
        </div>
        <div className='flex justify-center px-8'>
          <div className='bg-gray-900 border border-gray-900 rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-30 p-6 mb-10'>
            <p className='font-serif text-2xl text-white'><span className='font-bold'>Our Philosophy -</span> Stands behind living longer & stronger with more loving community & social interaction. We are backed by our philosophy, mission, & life guidelines at <span className='underline'>All Is One Movement.</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default aboutUs