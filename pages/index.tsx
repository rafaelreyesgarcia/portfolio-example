import Head from 'next/head'
import type { NextPage } from 'next'
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    // snappable container
    <div
      className="
        text-white bg-[#111]
        h-screen snap-y snap-mandatory
        overflow-y-scroll z-0 overflow-x-hidden
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab8a]/80
      "
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* About */}
      <section id='about' className='snap-center' >
        <About />
      </section>

      {/* experience */}
      <section id='experience' className='snap-center'>
        <Experience />
      </section>

      {/* skills */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      {/* projects */}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      {/* contact me */}
      <section id='contact' className='snap-start'>
        <Contact />
      </section>

      <Link href="#hero">
        <footer
          className='
            sticky bottom-5 w-full cursor-pointer
          '
        >
          <div className='flex items-center justify-center'>
            <img
              src="/logo.jpg"
              alt=""
              className='
                h-10 w-10 rounded-full
                filter grayscale opacity-40
                hover:grayscale-0 hover:opacity-100
              '
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home;
