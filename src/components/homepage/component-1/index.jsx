import BoondocksCard from './boondocksCard'

export default function Component1() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-12 sm:pt-24 flex lg:flex-row flex-col">
        {/* Text Section */}
        <div className="flex-1 pr-8 text-center">
          <h1 className="text-3xl mb-4">Exceptional Dining Experience</h1>
          <div className="mt-8 sm:mt-16">
            <BoondocksCard
              imgSrc="https://images.unsplash.com/photo-1499186024912-c374ac2e9cb2?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Family-friendly Atmosphere"
              context="The Boondocks Grill prides itself on its warm and welcoming atmosphere, making it the perfect place for families to come together and enjoy a meal. Whether you’re celebrating a special occasion or simply seeking a night out, the restaurant’s cozy ambiance and friendly staff guarantee a memorable experience for all. Children are always welcome and the menu includes options for all ages to enjoy."
            />
          </div>
        </div>

        {/* Card Section */}
        <div className="flex-1">
          <div>
            <BoondocksCard
              imgSrc="https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Varied Menu Options"
              context="The Boondocks Grill’s menu offers a diverse range of options, catering to a variety of tastes and preferences. From hearty comfort food to lighter, healthier options, the restaurant has something for everyone to savor. The chefs use only the freshest ingredients, ensuring that each dish is bursting with flavor and nutrition. Guests can explore the menu and discover new tastes while still enjoying classic favorites."
            />
          </div>
          <div className="mt-8 sm:mt-8">
            <BoondocksCard
              imgSrc="https://images.unsplash.com/flagged/photo-1564697259787-6fc88465d327?q=80&w=3571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Memorable Dining Experience"
              context="At The Boondocks Grill, we believe that dining out should be an experience that creates lasting memories. From the warm and inviting ambiance to the exceptional food and attentive service, every detail is designed to make your visit a memorable one. Whether you’re celebrating a special occasion or simply enjoying a night out with loved ones, the restaurant’s cozy atmosphere and friendly staff guarantee a dining experience that you will always cherish. Whether you’re celebrating a special occasion or simply seeking a night out, the restaurant’s cozy ambiance and friendly staff guarantee a memorable experience for all. Children are always welcome, and the menu includes options for all ages to enjoy."
            />
          </div>
        </div>
      </div>
    </>
  )
}
