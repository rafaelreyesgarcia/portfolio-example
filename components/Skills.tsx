import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className='
        h-screen flex relative flex-col text-center max-w-[2000px]
        md:text-left xl:flex-row xl:space-y-0
        xl:px-10 min-h-screen justify-center mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>hover over a skill for current proficiency</h3>

      <div className='grid grid-cols-4 gap-5'>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
    
  )
}