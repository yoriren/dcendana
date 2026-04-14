import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/organization')({
  component: Organization,
})

const ORG = {
  president: {
    name: 'KS CHIM',
    role: 'President',
    image: '/images/chim.jpeg', // replace with real image
  },
  leaders: [
    { name: 'BRONSON CHIN', 
      role: 'First Vice President',
      image: '/images/bronson.jpeg' 
    },
    { name: 'ALEX THAM', 
      role: 'Second Vice President',
      image: '/images/alex.jpeg' 
    },
  ],
  committee: [
    { name: '彩晶', role: 'Secretary' },
    { name: 'Choy', role: 'Treasurer' },
    { name: 'Xiu', role: 'Security Captain' },
    { name: 'Lucky', role: 'Vice Secretary' },
    { name: 'Joey Wong', role: 'Vice Treasurer' },
    { name: 'Ming', role: 'Vice Security Captain' },
  ],
}

function Organization() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl font-bold mb-2">Organization Chart</h1>
      <p className="text-gray-500 mb-10">
        D'Cendana Chinese Community Committee Structure
      </p>

      <div className="flex flex-col items-center">

  {/* PRESIDENT */}
  <div className="flex flex-col items-center mb-6 group">
    <div className="w-48 md:w-56 h-64 md:h-72 rounded-xl overflow-hidden shadow-lg 
      transition duration-300 transform group-hover:scale-105">
      
      <img
        src={ORG.president.image}
        alt={ORG.president.name}
        className="w-full h-full object-cover object-top"
      />
    </div>

    <div className="mt-5 bg-blue-600 text-white px-10 py-5 rounded-xl shadow text-center transition duration-300 transform group-hover:scale-105">
      <p className="text-sm uppercase tracking-wide">{ORG.president.role}</p>
      <p className="font-bold text-2xl">{ORG.president.name}</p>
    </div>
  </div>

  {/* LINE DOWN */}
  <div className="w-[2px] h-12 bg-gray-300"></div>

  {/* VICE PRESIDENTS */}
  <div className="relative flex justify-center gap-12 mb-10">

    {/* ✅ horizontal line (fixed position + layering) */}
    <div className="absolute top-0 left-22 right-24 h-[2px] bg-gray-300 z-0"></div>

    {ORG.leaders.map((leader) => (
      <div key={leader.name} className="flex flex-col items-center relative group">
        
        {/* line from top */}
        <div className="w-[2px] h-6 bg-gray-300"></div>

        {/* image */}
        <div className="w-32 md:w-36 h-40 md:h-44 rounded-xl overflow-hidden shadow-md 
          transition duration-300 transform group-hover:scale-105">
          
          <img
            src={leader.image}
            alt={leader.name}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* info */}
        <div className="mt-3 bg-blue-600 text-white px-6 py-3 rounded-xl shadow text-center transition duration-300 transform group-hover:scale-105">
          <p className="text-xs uppercase tracking-wide">{leader.role}</p>
          <p className="font-bold">{leader.name}</p>
        </div>

        {/* line down */}
        {/* <div className="w-[2px] h-6 bg-gray-300"></div> */}
      </div>
    ))}
  </div>

  {/* LINE DOWN TO COMMITTEE */}
  <div className="w-[2px] h-12 bg-gray-300 mb-6"></div>

  {/* COMMITTEE */}
  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
    {ORG.committee.map((member) => (
      <div key={member.name} className="bg-blue-600 text-white rounded-xl p-4 shadow text-center 
transition duration-300 transform 
hover:scale-105 hover:-translate-y-1 
hover:shadow-lg hover:shadow-blue-200 cursor-pointer">
        <p className="text-xs uppercase tracking-wide">{member.role}</p>
        <p className="font-semibold">{member.name}</p>
      </div>
    ))}
  </div>

</div>
    </main>
  )
}