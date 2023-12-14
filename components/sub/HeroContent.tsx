"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js

const HeroContent = () => {
    const resumeLink = "https://resume.io/r/Zvw9YRCCd"; // Replace with the actual path to your resume
  
    return (
      <motion.div
        initial='hidden'
        animate='visible'
        className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
      >
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
          <motion.div
            variants={slideInFromTop}
            className='Welcome-box py-[8px] px-[7px] border-[#7042f88b] opacity-[0.9]'
          >
            <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
            <h1 className='Welcome-text text-[13px]'>
              FullStack Developer Portfolio
            </h1>
          </motion.div>
  
          <motion.div
            variants={slideInFromLeft(0.5)}
            className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
          >
            <span>
              Providing
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> the best </span>
              project experience
            </span>
          </motion.div>
  
          <motion.p
            variants={slideInFromLeft(0.8)}
            className='text-lg text-gray-400 my-5 max-w-[600px]'
          >
            Hello, welcome to Debmalya&apos;s portfolio. Check out my projects and skills!!
          </motion.p>
  
          <Link href={resumeLink} passHref>
            <motion.a
              variants={slideInFromLeft(1)}
              className='py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[300px]'
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security best practice
            >
              My Resume
            </motion.a>
          </Link>
        </div>
  
        <motion.div
          variants={slideInFromRight(0.8)}
          className='w-full h-full flex justify-center items-center'
        >
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            width={650}
            height={650}
          />
        </motion.div>
      </motion.div>
    );
  };
  
  export default HeroContent;