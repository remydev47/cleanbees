import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const Testmonial = () => {
  return (
    <section className={styles.container}>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
       <div>
        <h1 className={styles.headername}>Mat & Tina</h1>
        <p className='italic text-xl'>“Although it took a while to explain what we wanted when we were booking the final result was great. <br/> The guys who cleaned the apartment were awesome! <br/> Highly recommended after party cleaning service!”</p>
       </div>
       <div>
        <h1 className={styles.headername}>Laura james</h1>
        <p className='italic text-xl'>“We booked the after-party  <br/> cleaning for a 4-room apartment. <br/> The job was impeccably clean and organised, as promised. We would use the service again.”</p>
       </div>
       <div>
        <h1 className={styles.headername}>Krak Fraco</h1>
        <p className='italic text-xl'>“Cheap price and excellent service. <br/> We booked the after party cleaning for our home <br/> and garden and the crew did an amazing job putting everything back to normal.”</p>
       </div>
      </Carousel>
    </section>
  )
}



const styles = {
  container:`bg-[#0ea5e9]`,
  headername:`font-bold `
}