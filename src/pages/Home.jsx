import React from 'react'
import Members from '../component/Members'
import Latest from '../component/Latest'

const Home = () => {
  return (
    <>
    <div className='relative h-screen bg-cover bg-center' style={{backgroundImage: "url('/images/backgroundOne.jpg')"}}>
      <div className='absolute inset-0 bg-black/50 flex flex-col items-center justify-center'>
        <h1 className='text-7xl lg:text-9xl md:text-8xl font-bold text-white mb-4'>KATSEYE</h1>
        <p className='text-lg md:text-2xl text-white mb-8'>Global Girl Group</p>
        <a href="https://www.youtube.com/watch?v=CjnB56tSCQI" target="_blank" rel="noopener noreferrer" className='border text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-amber-800 transform transition duration-300 hover:scale-105 hover:cursor-pointer'>
        Latest Music Video
        </a>

      </div>
    </div>
    <Members/>
    <Latest/>
    </>
  )
}

export default Home


