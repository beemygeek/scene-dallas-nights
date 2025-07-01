
import { useState } from 'react';
import { Calendar, Heart, Crown, Settings, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('rsvps');

  const userStats = {
    eventsAttended: 24,
    vipBookings: 8,
    savedEvents: 15,
    following: 45,
  };

  const tabs = [
    { id: 'rsvps', label: 'My RSVPs', icon: Calendar },
    { id: 'vip', label: 'VIP History', icon: Crown },
    { id: 'saved', label: 'Saved', icon: Heart },
  ];

  const mockRSVPs = [
    {
      id: '1',
      title: 'SATURDAY NIGHT VIBES',
      date: 'Dec 14',
      venue: 'Deep Ellum',
      status: 'confirmed',
      guests: 2,
    },
    {
      id: '2',
      title: 'SUNDAY BRUNCH & BEATS',
      date: 'Dec 15',
      venue: 'Bishop Arts',
      status: 'pending',
      guests: 4,
    },
  ];

  return (
    <div className="min-h-screen pb-20">
      {/* Profile Header */}
      <div className="px-4 pt-12 pb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-white text-2xl font-bold">Profile</h1>
          <Button variant="ghost" size="icon" className="text-white">
            <Settings size={24} />
          </Button>
        </div>

        {/* Profile Info */}
        <div className="scene-card p-6 mb-6">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-scene-pink to-scene-purple rounded-full flex items-center justify-center scene-glow mr-4">
              <span className="text-white font-bold text-xl">JD</span>
            </div>
            <div>
              <h2 className="text-white text-xl font-bold">Jordan Davis</h2>
              <p className="text-gray-400">@jordandallas</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-scene-pink font-bold text-lg">{userStats.eventsAttended}</div>
              <div className="text-gray-400 text-xs">Events</div>
            </div>
            <div className="text-center">
              <div className="text-scene-gold font-bold text-lg">{userStats.vipBookings}</div>
              <div className="text-gray-400 text-xs">VIP</div>
            </div>
            <div className="text-center">
              <div className="text-scene-cyan font-bold text-lg">{userStats.savedEvents}</div>
              <div className="text-gray-400 text-xs">Saved</div>
            </div>
            <div className="text-center">
              <div className="text-scene-purple font-bold text-lg">{userStats.following}</div>
              <div className="text-gray-400 text-xs">Following</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Button className="scene-button text-white font-bold py-3">
            <Bell className="mr-2" size={18} />
            Notifications
          </Button>
          <Button variant="outline" className="border-scene-purple text-scene-purple hover:bg-scene-purple hover:text-white py-3">
            Edit Profile
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4">
        <div className="flex mb-6 bg-white/10 rounded-lg p-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center py-3 px-4 rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-scene-pink text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Icon size={18} className="mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="space-y-4">
          {activeTab === 'rsvps' && (
            <>
              {mockRSVPs.map((rsvp) => (
                <div key={rsvp.id} className="scene-card p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-bold">{rsvp.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      rsvp.status === 'confirmed' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {rsvp.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-gray-400 text-sm">
                    <span>{rsvp.date} • {rsvp.venue}</span>
                    <span>{rsvp.guests} guests</span>
                  </div>
                </div>
              ))}
            </>
          )}

          {activeTab === 'vip' && (
            <div className="text-center py-8">
              <Crown size={48} className="mx-auto text-scene-gold mb-4" />
              <p className="text-gray-400">Your VIP experiences will appear here</p>
            </div>
          )}

          {activeTab === 'saved' && (
            <div className="text-center py-8">
              <Heart size={48} className="mx-auto text-scene-pink mb-4" />
              <p className="text-gray-400">Your saved events will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
