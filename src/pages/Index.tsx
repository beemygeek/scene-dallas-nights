
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HomePage from '@/components/HomePage';
import UserProfile from '@/components/UserProfile';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-scene flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'profile':
        if (!user) {
          return (
            <div className="min-h-screen pb-20 pt-16 px-4 text-center">
              <h1 className="text-white text-2xl font-bold mb-6">Profile</h1>
              <div className="scene-card p-6">
                <p className="text-gray-400 mb-4">Sign in to access your profile</p>
                <Button 
                  onClick={() => navigate('/auth')}
                  className="scene-button text-white font-bold"
                >
                  Sign In
                </Button>
              </div>
            </div>
          );
        }
        return <UserProfile />;
      case 'events':
        return (
          <div className="min-h-screen pb-20 pt-16 px-4">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-white text-2xl font-bold">All Events</h1>
              {user && (
                <Button 
                  onClick={handleSignOut}
                  variant="outline"
                  className="border-scene-purple text-scene-purple hover:bg-scene-purple hover:text-white"
                >
                  Sign Out
                </Button>
              )}
            </div>
            <div className="text-center py-8">
              <p className="text-gray-400">Event listings coming soon...</p>
            </div>
          </div>
        );
      case 'create':
        if (!user) {
          return (
            <div className="min-h-screen pb-20 pt-16 px-4">
              <h1 className="text-white text-2xl font-bold mb-6">Create Event</h1>
              <div className="scene-card p-6">
                <p className="text-gray-400 mb-4">Sign in to create events</p>
                <Button 
                  onClick={() => navigate('/auth')}
                  className="scene-button text-white font-bold"
                >
                  Sign In
                </Button>
              </div>
            </div>
          );
        }
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
