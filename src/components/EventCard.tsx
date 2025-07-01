
import { Calendar, MapPin, Users, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EventCardProps {
  event: {
    id: string;
    title: string;
    date: string;
    time: string;
    venue: string;
    price: string;
    vipPrice: string;
    image: string;
    tags: string[];
    featured?: boolean;
    sold_out?: boolean;
  };
  onRSVP: (eventId: string) => void;
  onVIP: (eventId: string) => void;
}

const EventCard = ({ event, onRSVP, onVIP }: EventCardProps) => {
  return (
    <div className={`scene-card overflow-hidden animate-fade-in ${event.featured ? 'scene-glow' : ''}`}>
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {event.featured && (
          <div className="absolute top-4 left-4 bg-gradient-glow text-white px-3 py-1 rounded-full text-sm font-bold animate-glow">
            FEATURED
          </div>
        )}
        
        <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
          <Heart size={20} className="text-white" />
        </button>
        
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-xl font-bold mb-2">{event.title}</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {event.tags.map((tag) => (
              <span key={tag} className="bg-scene-purple/80 text-white px-2 py-1 rounded-full text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-4 mb-4 text-gray-300">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span className="text-sm">{event.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            <span className="text-sm">{event.venue}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Button 
              onClick={() => onRSVP(event.id)}
              variant="outline"
              className="border-scene-purple text-scene-purple hover:bg-scene-purple hover:text-white"
            >
              RSVP {event.price}
            </Button>
            <Button 
              onClick={() => onVIP(event.id)}
              className={`scene-button text-white font-bold ${event.sold_out ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={event.sold_out}
            >
              {event.sold_out ? 'WAITLIST' : `VIP ${event.vipPrice}`}
            </Button>
          </div>
          <div className="flex items-center gap-1 text-scene-gold">
            <Star size={16} fill="currentColor" />
            <span className="text-sm font-medium">4.8</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
