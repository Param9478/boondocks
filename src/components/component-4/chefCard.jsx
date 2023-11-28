export default function ChefCard({ imgSrc }) {
    return (
      <div className="max-w-md bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 mb-8 flex flex-col items-center">
        {/* Image */}
        <img
          className="h-auto w-full object-cover"
          src={imgSrc}
          alt="Chef's Portrait"
        />
  
        {/* Card Content */}
        {/* Add your card content here */}
      </div>
    );
  }
  