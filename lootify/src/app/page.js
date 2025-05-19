import Image from 'next/image'
import Link from 'next/link'

const games = [
  {
    id: 1,
    title: 'Blackjack',
    description: 'Classic card game with modern twists',
    image: '/games/blackjack.jpg',
  },
  {
    id: 2,
    title: 'Slots',
    description: 'Experience the thrill of our premium slots',
    image: '/games/slots.jpg',
  },
  {
    id: 3,
    title: 'Roulette',
    description: 'European-style roulette with live dealers',
    image: '/games/roulette.jpg',
  },
  {
    id: 4,
    title: 'Poker',
    description: 'Texas Hold\'em and more poker variants',
    image: '/games/poker.jpg',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Lootify Casino
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the future of online gaming with our premium selection of games
          </p>
          <Link href="/games">
          <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all">
            Start Playing
          </button>
          `</Link>
          
        </div>
      </section>

      {/* Games Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Choose Your Game</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {games.map((game) => (
              <div key={game.id} className="glass-card p-6 cursor-pointer">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
                <p className="text-gray-400">{game.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
