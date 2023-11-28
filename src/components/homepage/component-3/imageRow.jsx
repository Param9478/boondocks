import React from 'react'

const ImageRow = () => {
  return (
    <div className="flex flex-wrap justify-center w-3/4 m-auto">
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
        <img
          src="https://images.unsplash.com/photo-1510693206972-df098062cb71?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="lasagna"
          className="w-full h-80 object-cover"
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
        <img
          src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2706&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="pasta"
          className="w-full h-80 object-cover"
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
        <img
          src="https://images.unsplash.com/photo-1580959375944-abd7e991f971?q=80&w=2205&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="beef dip"
          className="w-full h-80 object-cover"
        />
      </div>
    </div>
  )
}

export default ImageRow
