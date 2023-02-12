import React from 'react'
import { motion } from "framer-motion"
import { Project } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  projects: Project[];
}

export default function Projects({projects}: Props) {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row md-w-full justify-evenly mx-auto items-center z-0'
    >
      <h3
        className='
          absolute top-16 uppercase tracking-[20px]
          text-gray-500 text-2xl'
      >
        Projects
      </h3>
      {/* projects */}
      <div
        className='
          relative w-full flex
          overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
          z-20 mt-14
          scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab8a]/80
        '
      >
        {projects.map((project, i) => (
          <div
            key={project._id}
            className='
              w-screen h-screen
              flex-shrink-0 flex flex-col items-center justify-center
              space-y-5 p-20
              md:p-44
              snap-center
            '
          >
            <motion.img
              src={urlFor(project?.image).url()}
              alt=""
              initial={{
                y: -300,
                opacity: 0
              }}
              transition={{duration: 1.2}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
            />
            <div>
              <h4 className='text-4xl font-semibold text-center capitalize'>
                <span className='underline decoration-[#F7AB8A]/50'>{i + 1} / {projects.length} </span> <br></br>
                {project?.title}
              </h4>
              <div
                className='
                  flex items-center
                  space-x-2 justify-center
                '
              >
                {project?.technologies.map(technology => (
                  <img
                    className='
                      w-10 h-10
                      text-lg text-center
                      md:text-left
                    '
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                  />
                ))}
              </div>
              <p className='text-lg text-center md:text-left mt-4'>
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full absolute top-[30%] bg-[#F7AB8A]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}