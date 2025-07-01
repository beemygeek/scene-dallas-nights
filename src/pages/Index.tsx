
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HomePage from '@/components/HomePage';
import UserProfile from '@/components/UserProfile';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'profile':
        return <UserProfile />;
      case 'events':
        return (
          <div className="min-h-screen pb-20 pt-16 px-4">
            <h1 className="text-white text-2xl font-bold mb-6">All Events</h1>
            <div className="text-center py-8">
              <p className="text-gray-400">Event listings coming soon...</p>
            </div>
          </div>
        );
      case 'create':
        return (
          <div className="min-h-screen pb-20 pt-16 px-4">
            <h1 className="text-white text-2xl font-bold mb-6">Create Event</h1>
            <div className="scene-card p-6">
              <p className="text-gray-400 mb-4">Promoter portal coming soon...</p>
              <p className="text-sm text-gray-500">Upload flyers, manage guest lists, and track RSVPs</p>
            </div>
          </div>
        );
      case 'search':
        return (
          <div className="min-h-screen pb-20 pt-16 px-4">
            <h1 className="text-white text-2xl font-bold mb-6">Search Events</h1>
            <div className="text-center py-8">
              <p className="text-gray-400">Search functionality coming soon...</p>
            </div>
          </div>
        );
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-scene">
      {renderContent()}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Index;
