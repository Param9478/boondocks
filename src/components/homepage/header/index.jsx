// Header.js

import React from 'react'
import Navbar from './navbar'

const Header = () => {
  return (
    <div>
      <Navbar />
      <div className="relative overflow-hidden mt-16">
        <img
          src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Header Background"
          className="object-cover h-96 w-full brightness-50"
          style={{ objectPosition: 'center 20%' }}
        />
        {/* Text Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium w-full">
            Welcome to the Boondocks Grill
          </h1>
          <p className="w-full sm:w-3/4 pt-6 m-auto text-base sm:text-md font-light">
            Join us for a warm and inviting dining experience, where the food
            and memories are always exceptional.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
