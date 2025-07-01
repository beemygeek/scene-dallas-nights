
import { useState, useEffect } from 'react';
import EventCard from './EventCard';
import VibeFilter from './VibeFilter';
import { useToast } from '@/hooks/use-toast';

const HomePage = () => {
  const { toast } = useToast();
  const [selectedVibes, setSelectedVibes] = useState<string[]>([]);
  const [events, setEvents] = useState([
    {
      id: '1',
      title: 'SATURDAY NIGHT VIBES',
      date: 'Dec 14',
      time: '10:00 PM',
      venue: 'Deep Ellum',
      price: 'FREE',
      vipPrice: '$75',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop',
      tags: ['Turn Up', 'Live DJ', 'Late Night'],
      featured: true,
    },
    {
      id: '2',
      title: 'SUNDAY BRUNCH & BEATS',
      date: 'Dec 15',
      time: '2:00 PM',
      venue: 'Bishop Arts',
      price: '$25',
      vipPrice: '$95',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop',
      tags: ['Brunch', 'Chill', 'Day Party'],
    },
    {
      id: '3',
      title: 'EXCLUSIVE ROOFTOP',
      date: 'Dec 16',
      time: '8:00 PM',
      venue: 'Downtown Dallas',
      price: '$35',
      vipPrice: '$150',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop',
      tags: ['Exclusive', 'Sexy', 'Rooftop'],
      sold_out: true,
    },
  ]);

  const handleRSVP = (eventId: string) => {
    toast({
      title: "RSVP Confirmed! ✨",
      description: "You're on the list. See you on the scene!",
      duration: 3000,
    });
  };

  const handleVIP = (eventId: string) => {
    const event = events.find(e => e.id === eventId);
    if (event?.sold_out) {
      toast({
        title: "Added to Waitlist 👑",
        description: "We'll notify you if a VIP table opens up!",
        duration: 3000,
      });
    } else {
      toast({
        title: "VIP Table Reserved! 🍾",
        description: "Get ready for the royal treatment!",
        duration: 3000,
      });
    }
  };

  const handleVibeChange = (vibes: string[]) => {
    setSelectedVibes(vibes);
    // Filter events based on selected vibes
    console.log('Selected vibes:', vibes);
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="px-4 pt-12 pb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-white text-3xl font-bold">
              The Scene
              <span className="text-scene-pink ml-2">Dallas</span>
            </h1>
            <p className="text-gray-400 mt-1">Where the vibes are immaculate ✨</p>
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-scene-pink to-scene-purple rounded-full flex items-center justify-center scene-glow">
            <span className="text-white font-bold text-lg">SD</span>
          </div>
        </div>
      </div>

      {/* Vibe Filter */}
      <VibeFilter onVibeChange={handleVibeChange} />

      {/* Featured Events */}
      <div className="px-4 py-6">
        <h2 className="text-white text-xl font-bold mb-4">🔥 Featured Events</h2>
        <div className="space-y-6">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onRSVP={handleRSVP}
              onVIP={handleVIP}
            />
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 py-6">
        <h2 className="text-white text-xl font-bold mb-4">Browse Categories</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: 'Day Parties', emoji: '☀️', count: 12 },
            { name: 'Lounge', emoji: '🍸', count: 8 },
            { name: 'Live Music', emoji: '🎤', count: 6 },
            { name: 'Rooftop', emoji: '🏙️', count: 4 },
          ].map((category) => (
            <div key={category.name} className="scene-card p-4 text-center hover:scene-glow transition-all duration-300 cursor-pointer">
              <div className="text-3xl mb-2">{category.emoji}</div>
              <h3 className="text-white font-semibold">{category.name}</h3>
              <p className="text-gray-400 text-sm">{category.count} events</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
