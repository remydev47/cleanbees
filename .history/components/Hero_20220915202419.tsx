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
                    Discover your future
                </h1>
                <span className='text-xl text-white sm:text-2xl'>
                    Find your next Job
                </span>
                
              </div>
        </div>
      </section>

    </>
  )
}

export default Hero;
const styles ={
    
    innerbanner:`text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl`,
}