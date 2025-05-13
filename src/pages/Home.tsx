
import React from 'react';
import { Button } from '@/components/ui/button';
import BottomNav from '@/components/BottomNav';
import LiveMatchCard from '@/components/LiveMatchCard';
import { ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  const handleMatchClick = (matchId: string) => {
    console.log(`Clicked on match: ${matchId}`);
  };

  return (
    <div className="min-h-screen bg-muted pb-16">
      {/* Header */}
      <div className="bg-primary text-white py-4 px-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Fliker</h1>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Search Bar */}
      <div className="px-4 py-3">
        <div className="relative">
          <input
            type="search"
            placeholder="Search for matches, teams, or players..."
            className="w-full bg-white rounded-lg py-2 pl-10 pr-4 border border-gray-200"
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      
      {/* Featured Section */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold">Featured Matches</h2>
          <Button variant="ghost" size="sm" className="text-primary flex items-center">
            See All <ChevronRight size={16} />
          </Button>
        </div>
        
        <div className="relative h-40 bg-secondary rounded-xl flex items-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-secondary-900 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-4 border-white opacity-30"></div>
            </div>
          </div>
          
          <div className="z-10 p-4 text-white">
            <div className="text-sm font-medium mb-1">Tournament Final</div>
            <h3 className="text-xl font-bold mb-2">Mumbai Titans vs Delhi Warriors</h3>
            <div className="flex items-center space-x-1">
              <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-xs">LIVE • Cricket Premier League</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Live Matches */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold">Live Matches</h2>
          <Button variant="ghost" size="sm" className="text-primary flex items-center">
            See All <ChevronRight size={16} />
          </Button>
        </div>
        
        <div className="space-y-3">
          <LiveMatchCard
            matchId="match-1"
            sport="cricket"
            teamA={{ name: "Mumbai", score: "120/6" }}
            teamB={{ name: "Delhi", score: "95/4" }}
            matchStatus="live"
            timeInfo="15.2 overs"
            onClick={() => handleMatchClick("match-1")}
          />
          
          <LiveMatchCard
            matchId="match-2"
            sport="basketball"
            teamA={{ name: "Rockets", score: 78 }}
            teamB={{ name: "Blazers", score: 82 }}
            matchStatus="live"
            timeInfo="Q3 • 4:32"
            onClick={() => handleMatchClick("match-2")}
          />
          
          <LiveMatchCard
            matchId="match-3"
            sport="kabaddi"
            teamA={{ name: "Panthers", score: 24 }}
            teamB={{ name: "Yoddhas", score: 18 }}
            matchStatus="live"
            timeInfo="2nd Half • 12:45"
            onClick={() => handleMatchClick("match-3")}
          />
        </div>
      </div>
      
      {/* Upcoming Matches */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold">Upcoming Matches</h2>
          <Button variant="ghost" size="sm" className="text-primary flex items-center">
            See All <ChevronRight size={16} />
          </Button>
        </div>
        
        <div className="space-y-3">
          <LiveMatchCard
            matchId="match-4"
            sport="football"
            teamA={{ name: "United", score: "-" }}
            teamB={{ name: "City", score: "-" }}
            matchStatus="upcoming"
            timeInfo="Tomorrow • 7:30 PM"
            onClick={() => handleMatchClick("match-4")}
          />
          
          <LiveMatchCard
            matchId="match-5"
            sport="cricket"
            teamA={{ name: "Kolkata", score: "-" }}
            teamB={{ name: "Chennai", score: "-" }}
            matchStatus="upcoming"
            timeInfo="Today • 8:00 PM"
            onClick={() => handleMatchClick("match-5")}
          />
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <BottomNav active="home" />
    </div>
  );
};

export default Home;
