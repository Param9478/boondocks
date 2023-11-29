import React from 'react'
import ImageRow from './imageRow'

const Component3 = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1488992783499-418eb1f62d08?q=80&w=3689&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Header Background"
          className="object-cover h-80 w-full brightness-50"
          style={{ objectPosition: 'center 50%' }}
        />
        {/* Text Content */}
        <div className="absolute text-center sm:text-left w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex sm:flex-row flex-col justify-between max-w-6xl">
          <div className="w-3/5 sm:m-0 m-auto">
            <h1 className="lg:text-3xl md:text-lg sm:text-md font-light w-full">
              The Boondocks Grill's Culinary Delights
            </h1>

            <p className="w-full pt-6 m-auto text-light lg:text-sm text-xs">
              At The Boondocks Grill, we offer a diverse range of dishes that
              appeals to all palates. Our menu boasts hearty, home-style dishes,
              as well as lighter options for those seeking healthy alternatives.
              From savory appetizers to delectable entrees and mouth-watering
              desserts, our culinary team delivers an unforgettable dining
              experience.
            </p>
          </div>

          <div className="  sm:my-auto mt-5">
            <button className="sm:text-sm text-xs border border-white p-2 m-auto block hover:bg-white hover:text-black">
              VIEW ALL MENU
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <ImageRow />
      </div>
    </div>
  )
}

export default Component3
