import React from 'react'

function MainContent() {
  return (
    
    <div className="min-h-screen overflow-x-auto  mt-20 min-h-100vh">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="px-28 py-8 bg-grey-200  ">
        <h1 className="text-3xl font-bold mb-4 ml-10 text-center ">Sweet memeories resurreled reliving the past</h1>
        <p className="text-gray-700 ml-10 text-center">
          Redisccover joy Sweet, memories resurrected. Step into our world and relive chrershed moments. join us in the magic of memory.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img src="https://th.bing.com/th/id/OIP.A7KWBRwhVIE969GOpBgXfgHaE7?pid=ImgDet&w=207&h=138&c=7&dpr=1,1" alt="Sample Image" className="w-full md:w-auto rounded-lg" />
      </div>
    </div>
    </div>
  )
}

export default MainContent