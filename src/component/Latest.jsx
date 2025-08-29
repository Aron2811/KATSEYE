import React from 'react'

const latestAlbum = [
    {
        image: '/images/background2.jpg',
        albumName: 'Beautiful',
        color: '#ec1c24'
    },
    {
        image: '/images/backgroundOne.jpg',
        albumName: 'Chaos',
        color: '#fcd005'
    },
    
]

const Latest = () => {
  return (
    <div className='min-h-screen py-12 bg-black/75 '>
      <div className='container mx-auto px-4 text-white '>
        <h2 className='text-6xl font-bold text-center mb-8'>BEAUTIFUL CHAOS</h2>
        <div className='grid gap-2 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2'>
          {latestAlbum.map((album, index) => (
            <div key={index} style={{backgroundColor: album.color}} className={`rounded-lg shadow-md overflow-hidden cursor-pointer`}>
              <img src={album.image} alt={album.albumName}  className='w-full h-[500px] object-cover ' />
              <div className='p-4 text-center'>
                <h3 className='text-4xl font-bold mb-5'>{album.albumName}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Latest
