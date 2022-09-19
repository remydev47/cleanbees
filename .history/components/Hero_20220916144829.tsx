import React from 'react'
import Image from 'next/image'


const Hero = () => {
  return (
    <>
      <section className='relative h-[640px] w-full  bg-blue-500 sm:h-[55vh] md:h-[440px]'>
        <Image 
          src="/img/pixel-cleaner2.jpg"
          layout='fill'
          objectFit='cover'
        />
        <div className="absolute inset-0 bg-neutral-900/70">
        <div className='mx-4 mt-16 flex flex-col items-center text-center '>
                <h1 className={styles.innerbanner}>
                    Give you Home a Perfect Shine
                </h1>
                <span className='text-xl text-white sm:text-2xl'>
                    Reliable house cleaning professionals serving the greater San Francisco area
                </span>
                <button className='bg-green-500 text-black font-semibold p-2 rounded-xl'>
                    Send a Quote
                </button>
              </div>
        </div>
      </section>
      <HeroBottomCard />
    </>
  )
}

function HeroBottomCard() {
    return (
      <div className="bg-[#0ea5e9] p-4">
        <span className="block text-center text-lg text-white">
          Nobody wants to do cleaning?We Do! Drop your  Quote with{" "}
          <span className="bg-gradient-to-r from-black to-[#fff] bg-clip-text align-middle text-2xl font-black tracking-widest text-transparent">
            CLEAN-BEES
          </span>{" "}
          cleaners here.
        </span>
      </div>
    );
  }

export default Hero;
const styles ={
    
    innerbanner:`text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl`,
}