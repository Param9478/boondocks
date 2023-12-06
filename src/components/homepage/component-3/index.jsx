import React from 'react'
import ImageRow from './imageRow'
import { Link } from 'react-router-dom'
import culinaryDelights from '../../../assets/culinaryDelights.webp'
import food1 from '../../../assets/food1.webp'
import food2 from '../../../assets/food2.webp'
import food3 from '../../../assets/food3.webp'

const Component3 = () => {
  return (
    <div>
      <div className="relative">
        <img
          src={culinaryDelights}
          alt="Header Background"
          loading="eager"
          className="object-cover h-80 w-full brightness-50"
          style={{ objectPosition: 'center 50%' }}
        />
        {/* Text Content */}
        <div className="absolute text-center lg:text-left w-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex lg:flex-row flex-col justify-around max-w-7xl">
          <div className="md:w-3/5 sm:w-full lg:m-0 m-auto">
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

          <Link
            to="https://boondocks2.popmenu.com/#menu?location=boondocks"
            className="lg:my-auto mt-5"
            target="_blank"
          >
            <button className="sm:text-sm text-xs border border-white p-2 m-auto block hover:bg-white hover:text-black">
              VIEW ALL MENU
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-gray-100 py-10 lg:block hidden">
        <div className="flex flex-col lg:flex-row lg:space-x-8 lg:w-3/4 sm:w-2/4 mx-auto py-10 p-2">
          <ImageRow imgSrc={food1} alt="lasagna" />
          <ImageRow imgSrc={food2} alt="pasta" />
          <ImageRow imgSrc={food3} alt="beef dip" />
        </div>
      </div>
    </div>
  )
}

export default Component3
