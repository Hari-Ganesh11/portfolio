//import React from 'react'

const Hero = () => {
  return (
    <section id='hero' className='hero-section inline-flex flex-col items-center w-full p-10'>
      <img src='src\assets\hari_image-new.jpeg'width={200} height={200} className=' rounded-full border-2'></img>
      <div className='title-section flex flex-row'><p className=''>Hi I'm </p><h1 className='px-2'> Hari Ganesh </h1></div>
      <p className='items-center justify-center text-center'> Front end Engineer building scalable and high performance web applications for enterprises using React and Next js</p>
    </section>
  )
}

export default Hero