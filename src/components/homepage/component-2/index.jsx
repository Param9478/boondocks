const Menu = () => {
  const menuItems = [
    {
      name: 'Chicken Fried Steak',
      price: '$14.99',
      description:
        'A Southern classic, hand-breaded and fried to golden perfection. Served with mashed potatoes, gravy, and steamed vegetables.',
    },
    {
      name: 'Barbecue Ribs',
      price: '$17.99',
      description:
        'Tender ribs slow-cooked to perfection, basted in our signature sauce. Served with crispy fries and coleslaw.',
    },
    {
      name: 'Grilled Salmon',
      price: '$16.99',
      description:
        'Fresh salmon fillet grilled to perfection. Served with white rice and a fresh salad.',
    },
    {
      name: 'Grilled Salmon',
      price: '$16.99',
      description:
        'Fresh salmon fillet grilled to perfection. Served with white rice and a fresh salad.',
    },
    {
      name: 'Grilled Salmon',
      price: '$16.99',
      description:
        'Fresh salmon fillet grilled to perfection. Served with white rice and a fresh salad.',
    },
    {
      name: 'Grilled Salmon',
      price: '$16.99',
      description:
        'Fresh salmon fillet grilled to perfection. Served with white rice and a fresh salad.',
    },
    {
      name: 'Grilled Salmon',
      price: '$16.99',
      description:
        'Fresh salmon fillet grilled to perfection. Served with white rice and a fresh salad.',
    },
    {
      name: 'Grilled Salmon',
      price: '$16.99',
      description:
        'Fresh salmon fillet grilled to perfection. Served with white rice and a fresh salad.',
    },
    // Add more menu items as needed
  ]

  return (
    <div className="opacity-90 bg-black text-white p-8 md:p-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl text-center mb-8 sm:mb-0">OUR MENU</h1>

        <div className="p-8 text-center relative hidden sm:block">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 border-t-2 border-white w-1/4"></div>
          <span className="text-2xl">Get Relax. Eat.</span>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 border-t-2 border-white w-1/4"></div>
        </div>

        <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-52 gap-y-8 mx-auto">
          {menuItems.map((item, index) => (
            <div key={index} className="mb-4 text-justify">
              <h2 className="text-xl">
                {item.name} - {item.price}
              </h2>
              <p className="text-sm font-light">{item.description}</p>
            </div>
          ))}
        </div>

        <button className="block text-md border border-white p-2 mx-auto mt-4 hover:bg-white hover:text-black">
          VIEW ALL MENU
        </button>
      </div>
    </div>
  )
}

export default Menu
