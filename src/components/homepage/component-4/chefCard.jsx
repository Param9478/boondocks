export default function ChefCard({ imgSrc }) {
  return (
    <div className="max-w-md bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 mb-8">
      {/* Image */}
      <img
        className="h-96 w-full object-cover"
        src={imgSrc}
        alt="Chef's Portrait"
      />
    </div>
  )
}
