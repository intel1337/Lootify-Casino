import Image from 'next/image';
import Link from 'next/link';

const GameCard = ({ title, description, imageUrl, href }) => {
  return (
    <Link href={href} className="block">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <div className="mt-4">
            <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300">
              Play Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard; 