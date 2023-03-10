import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
  experience: Experience
}

export default function ExperienceCard({experience}: Props) {
  return (
    <article
      className='
      flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
      w-[500px] md:w-[600px] xl:w-[900px]
      snap-center bg-[#292929] p-10
      hover:opacity-100 opacity-40 cursor-pointer transition-oapcity duration-200 overflow-hidden'
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{duration: 1.2}}
        whileInView={{opacity:1, y:0}}
        viewport={{once: true}}
        className='
          w-32 h-32 rounded-full object-cover object-center
          xl:w-[200px] xl:h-[200px]'
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Advertising</h4>
        <p className='font-bold text-2xl mt-1'>Upwork</p>
        <div className='flex gap-2 space-x-2 my-2'>
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              src={urlFor(technology.image).url()}
              className='h-10 w-10 rounded-full object-cover'
            />
          ))}
        </div>
        <p className='uppercase py-5 text-gray-300'>
          {new Date(experience.dataStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className='list-disc space-y-4 ml-5'>
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}