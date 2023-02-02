import React from 'react'
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Header({}: Props) {
  return (
    <header
      className='
        sticky top-0
        p-5
        flex items-start justify-between
        max-w-7xl mx-auto
        z-20'
    >
      <div
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
      </div>
      <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon
            className='cursor-pointer'
            network='email'
            url='mailto:rafaelreyesgarcia93@gmail.com'
            fgColor='gray'
            bgColor='transparent'
        />
        <p
          className='
            uppercase hidden md:inline-flex text-sm text-gray-400'
        >
          get in touch
        </p>
      </div>
    </header>
  )
}

// tsrfc
