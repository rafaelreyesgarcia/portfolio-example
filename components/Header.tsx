import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import Link from 'next/link';

type Props = {}

export default function Header({}: Props) {
  return (
    <header
      className='
        sticky top-0 z-20
        p-5 max-w-7xl mx-auto
        flex items-start justify-between
        xl:items-center
      '
    >

      <motion.div
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1.5
      }}
        className='
          flex flex-row items-center'
      >
        {/* social icons */}
        <SocialIcon
          url="twitter.com"
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url="facebook.com"
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url="github.com"
          fgColor='gray'
          bgColor='transparent'
        />
      </motion.div>

      <Link href='#contact'>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1.5
          }}
          className='
            flex flex-row items-center
            text-gray-300 cursor-pointer
          '
        >
          <SocialIcon
              className='cursor-pointer'
              network='email'
              url='mailto:rafaelreyesgarcia93@gmail.com'
              fgColor='gray'
              bgColor='transparent'
          />
          <p
            className='
              hidden
              md:inline-flex
              text-sm text-gray-400 uppercase'
          >
            get in touch
          </p>
        </motion.div>
      </Link>

    </header>
  )
}

// tsrfc
