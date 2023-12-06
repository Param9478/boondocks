import ChefCard from './chefCard'
import chef1 from '../../../assets/chef1.avif'
import chef2 from '../../../assets/chef2.avif'
import chef3 from '../../../assets/chef3.avif'

export default function Component4() {
  return (
    <div className="mx-auto max-w-7xl px-2 pt-12 sm:pt-24 flex lg:flex-row flex-col">
      {/* Text Section */}

      <div className="flex-1 text-center lg:text-left lg:w-1/4 md:w-3/4 m-auto">
        <div className="lg:w-3/4 w-full m-auto">
          <h1 className="text-3xl mb-3">Meet our team</h1>
          <p className="font-light text-gray-700 text-xs">
            Step into The Boondocks Grill, and you’ll be transported to a cozy,
            welcoming space where you can relax and indulge in delicious food.
            Our commitment to providing an exceptional dining experience is
            reflected in everything we do, from our warm and attentive service
            to our carefully crafted menu. Whether you’re dining with family,
            catching up with friends, or enjoying a romantic meal, we aim to
            make every moment memorable.
          </p>
        </div>
        <div className="mt-8 sm:mt-16">
          <ChefCard imgSrc={chef1} />
        </div>
      </div>

      {/* Card Section */}
      <div className="flex-1 mt-5">
        <div>
          <ChefCard
            imgSrc={chef2}
            title="Varied Menu Options"
            context="The Boondocks Grill’s menu offers a diverse range of options, catering to a variety of tastes and preferences. From hearty comfort food to lighter, healthier options, the restaurant has something for everyone to savor. The chefs use only the freshest ingredients, ensuring that each dish is bursting with flavor and nutrition. Guests can explore the menu and discover new tastes while still enjoying classic favorites."
          />
        </div>
        <div className="mt-8 sm:mt-8">
          <ChefCard
            imgSrc={chef3}
            title="Memorable Dining Experience"
            context="At The Boondocks Grill, we believe that dining out should be an experience that creates lasting memories. From the warm and inviting ambiance to the exceptional food and attentive service, every detail is designed to make your visit a memorable one. Whether you’re celebrating a special occasion or simply enjoying a night out with loved ones, the restaurant’s cozy atmosphere and friendly staff guarantee a dining experience that you will always cherish. Whether you’re celebrating a special occasion or simply seeking a night out, the restaurant’s cozy ambiance and friendly staff guarantee a memorable experience for all. Children are always welcome, and the menu includes options for all ages to enjoy."
          />
        </div>
      </div>
    </div>
  )
}
