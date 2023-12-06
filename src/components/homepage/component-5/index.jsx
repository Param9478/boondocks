// Component5.js
import React from 'react'
import ReviewCard from './reviewCard'
import reviewer1 from '../../../assets/reviewer1.webp'
import reviewer2 from '../../../assets/reviewer2.webp'
import reviewer3 from '../../../assets/reviewer3.webp'
import whatTheySay from '../../../assets/whatTheySay.webp'

const Component5 = () => {
  const reviewerImages = [
    {
      imgSrc: reviewer1,
      review:
        "The Boondocks Grill is the perfect spot for a family dinner. The atmosphere is cozy and welcoming, and the menu has something for everyone to enjoy. The staff was attentive and made sure we had everything we needed. We'll definitely be back!'",
      name: 'Jennifer',
    },
    {
      imgSrc: reviewer2,
      review:
        "I had a fantastic experience at The Boondocks Grill. The food was delicious, and the service was top-notch. The inviting atmosphere made me feel right at home, and I can't wait to come back.",
      name: 'James',
    },
    {
      imgSrc: reviewer3,
      review:
        'The Boondocks Grill exceeded my expectations. The menu had a great variety of dishes, and everything we ordered was cooked to perfection. The staff was friendly and welcoming, and the cozy atmosphere made for a memorable dining experience.',
      name: 'Brian',
    },
  ]

  return (
    <div>
      <div className="relative mt-8">
        <img
          src={whatTheySay}
          alt="Header Background"
          loading='eager'
          className="object-cover h-80 w-full brightness-50"
        />
        {/* Text Content */}
        <div className="absolute text-center sm:text-left top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-20">
          <div className="sm:m-0 m-auto">
            <h1 className="lg:text-3xl text-2xl w-full lg:mt-8 mt-12">
              What They Say
            </h1>
          </div>
        </div>
      </div>
      {/* Review Cards */}
      <div className="flex flex-col lg:flex-row justify-center -mt-24 lg:space-x-8 max-w-6xl m-auto">
        {reviewerImages.map((data, index) => (
          <ReviewCard key={index} reviewerData={data} />
        ))}
      </div>
    </div>
  )
}

export default Component5
