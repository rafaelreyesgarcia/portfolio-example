import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {}

export default function Contact({}: Props) {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: {errors}
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:rafaelreyesgarcia93@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} {${formData.email}}`
  };
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>contact</h3>
      <div className='flex flex-col space-y-10 mt-16'>
        <h4 className='text-4xl font-semibold text-center'>
          Lets {" "}
          <span className='underline decoration-[#F7AB8A]/50'>Connect.</span>
        </h4>
        <div className=''>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#f7AB8A] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>+3123123122</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#f7AB8A] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>rafaelreyesgarcia93@gmail.com</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#f7AB8A] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>Chicago, Illinois</p>
          </div>
        </div>

        <form
          className='
            flex flex-col space-y-2 w-fit mx-auto
          '
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='flex space-x-2'>
            <input {...register('name')} className='contactInput' type="text" placeholder='Name' />
            <input {...register('email')} className='contactInput' type="email" placeholder='Email' />
          </div>
          <input  {...register('subject')} className='contactInput' type="text" placeholder='Subject' />
          <textarea {...register('message')} className='contactInput' placeholder='Message'></textarea>
          <button
            type='submit'
            className='bg-[#f7ab8a] py-5 px-10 rounded-md text-black font-bold text-lg'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}