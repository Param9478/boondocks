import Chef1 from '../../assets/chef1.avif'
import Chef2 from '../../assets/chef2.avif'
import Chef3 from '../../assets/chef3.avif'

export default function TeamPicture() {
  const chefData = [
    {
      name: 'John Doe',
      imgSrc: Chef1,
    },
    {
      name: 'Jane Smith',
      imgSrc: Chef2,
    },
    {
      name: 'Mike Johnson',
      imgSrc: Chef3,
    },
  ]

  return (
    <div className="mt-10 bg-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {chefData.map((chef, index) => (
            <div key={index} className="text-center mx-2 w-1/3">
              <img
                src={chef.imgSrc}
                alt={`chef${index + 1}`}
                className="w-full h-auto object-cover mt-8"
              />
              <p className="mt-2 sm:text-sm lg:text-xl">{chef.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
