import React from 'react'

const members = [
    {
        image: '/images/Sophia.jpg',
        memberName: 'Sophia Laforteza'   ,
        description: 'Member of the global girl group KATSEYE.',
        link: 'https://www.instagram.com/sophia_laforteza/?hl=en',
    },
    {
        image: '/images/Lara.jpg',
        memberName: 'Lara Raj'   ,
        description: 'Member of the global girl group KATSEYE',
        link: 'https://www.instagram.com/lararajj/?hl=en',
    },
    {
        image: '/images/Manon.jpg',
        memberName: 'Meret Manon Bannerman',
        description: 'Member of the global girl group KATSEYE',
        link: 'https://www.instagram.com/meretmanon/?hl=en',
    },
    {
        image: '/images/Daniela.jpg',
        memberName: 'Daniela Avanzini',
        description: 'Member of the global girl group KATSEYE',
        link: 'https://www.instagram.com/daniela_avanzini/?hl=en',
    },
    {
        image: '/images/Megan.jpg',
        memberName: 'Megan Skiendiel',
        description: 'Member of the global girl group KATSEYE',
        link: 'https://www.instagram.com/meganskiendiel/?hl=en',
    },
    {
        image: '/images/Yoonchae.jpg',
        memberName: 'Jeong Yoonchae',
        description: 'Member of the global girl group KATSEYE',
        link: 'https://www.instagram.com/y0on_cha3/?hl=en',
    },
]

const Members = () => {
  return (
    <div className='py-12 bg-black/75 '>
      <div className='container mx-auto px-4 text-white'>
        <h2 className='text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-8'>Members</h2>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
          {members.map((member, index) => (
            <a 
      key={index} 
      href={member.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className='rounded-lg shadow-md overflow-hidden cursor-pointer'
    >
      <img src={member.image} alt={member.memberName} className='w-full h-150 object-cover' />
      <div className="p-4 text-center">
        <h3 className="text-xl md:text-2xl font-bold mb-2">{member.memberName}</h3>
        <p className="text-gray-300">{member.description}</p>
      </div>
    </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Members

