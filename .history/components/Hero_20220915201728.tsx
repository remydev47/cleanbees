import React from 'react'
import Image from 'next/image'


const Hero = () => {
  return (
    <>
      <section className='relative h-[640px] w-full  bg-blue-500 sm:h-[55vh] md:h-[440px]'>
        <Image 
          src="/img/pixelcleaner3.png"
          layout='fill'
          objectFit='cover'
        />
        <div>
            
        </div>
      </section>

    </>
  )
}

export default Hero