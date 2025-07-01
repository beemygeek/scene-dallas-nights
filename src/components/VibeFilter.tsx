
import { useState } from 'react';

const VibeFilter = ({ onVibeChange }: { onVibeChange: (vibes: string[]) => void }) => {
  const [selectedVibes, setSelectedVibes] = useState<string[]>([]);
  
  const vibes = [
    { id: 'chill', label: 'Chill', emoji: '😌', color: 'from-blue-500 to-cyan-500' },
    { id: 'turnup', label: 'Turn Up', emoji: '🔥', color: 'from-red-500 to-pink-500' },
    { id: 'sexy', label: 'Sexy', emoji: '💋', color: 'from-pink-500 to-purple-500' },
    { id: 'exclusive', label: 'Exclusive', emoji: '👑', color: 'from-yellow-500 to-orange-500' },
    { id: 'live', label: 'Live Music', emoji: '🎵', color: 'from-green-500 to-teal-500' },
    { id: 'brunch', label: 'Brunch', emoji: '🥂', color: 'from-orange-500 to-red-500' },
  ];

  const toggleVibe = (vibeId: string) => {
    const newVibes = selectedVibes.includes(vibeId)
      ? selectedVibes.filter(v => v !== vibeId)
      : [...selectedVibes, vibeId];
    
    setSelectedVibes(newVibes);
    onVibeChange(newVibes);
  };

  return (
    <div className="px-4 py-6">
      <h2 className="text-white text-lg font-bold mb-4">What's Your Vibe?</h2>
      <div className="grid grid-cols-2 gap-3">
        {vibes.map((vibe) => (
          <button
            key={vibe.id}
            onClick={() => toggleVibe(vibe.id)}
            className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
              selectedVibes.includes(vibe.id)
                ? `bg-gradient-to-r ${vibe.color} border-white/50 scene-glow`
                : 'bg-white/10 border-white/20 hover:border-white/40'
            }`}
          >
            <div className="text-2xl mb-2">{vibe.emoji}</div>
            <div className="text-white font-medium text-sm">{vibe.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default VibeFilter;
