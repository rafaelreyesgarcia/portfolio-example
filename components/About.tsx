import React from 'react'
import { motion } from "framer-motion"
import { PageInfo } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
  pageInfo: PageInfo
}

export default function About({pageInfo}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className='
        h-screen flex flex-col relative text-center
        md:text-left md:flex-row max-w-7xl
        px-10 justify-evenly mx-auto items-center'
    >
      <h3
        className='
          absolute top-24 uppercase tracking-[20px]
          text-gray-500 text-2xl'
      >
        About
      </h3>
      <div className='flex items-center mt-28'>
        <motion.img
          src={urlFor(pageInfo?.profilePic).url()}
          alt='about photo'
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2
          }}
          whileInView={{x: 0, opacity: 1}}
          // viewport={{once: true}} // prevents it from retriggering
          className='
            -mb-20 md:mb-0 md:mt-20
            flex-shrink-0
            w-56 h-56 rounded-full object-cover
            md:rounded-lg md:w-64 md:h-95
            xl:w-[500px] xl:h-[500px]'
        />
        <div className='space-y-10 px-0 md:px-10'>
          <h4 className='text-4xl font-semibold'>Here's a <span className='underline decoration-[#F7AB8A]/50'>little</span> background</h4>
          <p className='text-base'>
            {pageInfo?.backgroundInformation}
          </p>
        </div>
      </div>
    </motion.div>
  )
}