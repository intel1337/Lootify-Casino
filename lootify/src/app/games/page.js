import Header from '../components/Header';
import GameCard from '../components/GameCard';

const games = [
  {
    title: 'Slots',
    description: 'Classic slot machines with modern twists and big jackpots',
    imageUrl: '/images/slots.jpg',
    href: '/games/slots'
  },
  {
    title: 'Blackjack',
    description: 'Test your skills against the dealer in this classic card game',
    imageUrl: '/images/blackjack.jpg',
    href: '/games/blackjack'
  },
  {
    title: 'Roulette',
    description: 'Place your bets and watch the wheel spin in this exciting game',
    imageUrl: '/images/roulette.jpg',
    href: '/games/roulette'
  },
  {
    title: 'Poker',
    description: 'Show your poker face and compete against other players',
    imageUrl: '/images/poker.jpg',
    href: '/games/poker'
  },
  {
    title: 'Baccarat',
    description: 'A sophisticated card game of chance and strategy',
    imageUrl: '/images/baccarat.jpg',
    href: '/games/baccarat'
  },
  {
    title: 'Craps',
    description: 'Roll the dice and experience the excitement of the casino floor',
    imageUrl: '/images/craps.jpg',
    href: '/games/craps'
  }
];

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Choose Your Game</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <GameCard
              key={game.title}
              title={game.title}
              description={game.description}
              imageUrl={game.imageUrl}
              href={game.href}
            />
          ))}
        </div>
      </main>
    </div>
  );
} 