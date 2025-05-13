
import React from 'react';

interface TeamInfo {
  name: string;
  logo?: string;
  score: string | number;
}

interface MatchCardProps {
  matchId: string;
  sport: 'cricket' | 'kabaddi' | 'basketball' | 'football';
  teamA: TeamInfo;
  teamB: TeamInfo;
  matchStatus: 'live' | 'upcoming' | 'completed';
  timeInfo: string;
  onClick: () => void;
}

const LiveMatchCard: React.FC<MatchCardProps> = ({
  matchId,
  sport,
  teamA,
  teamB,
  matchStatus,
  timeInfo,
  onClick,
}) => {
  // Get sport specific colors
  const getSportColor = () => {
    switch (sport) {
      case 'cricket':
        return 'bg-primary-100 text-primary-600';
      case 'kabaddi':
        return 'bg-secondary-100 text-secondary-600';
      case 'basketball':
        return 'bg-accent-100 text-accent-600';
      case 'football':
        return 'bg-blue-100 text-blue-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  // Get match status badge
  const getStatusBadge = () => {
    switch (matchStatus) {
      case 'live':
        return (
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-500 text-xs font-medium">LIVE</span>
          </div>
        );
      case 'upcoming':
        return <span className="text-blue-500 text-xs font-medium">Upcoming</span>;
      case 'completed':
        return <span className="text-gray-500 text-xs font-medium">Completed</span>;
      default:
        return null;
    }
  };

  return (
    <div className="fliker-card cursor-pointer" onClick={onClick}>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div className={`text-xs rounded-full px-2 py-0.5 capitalize ${getSportColor()}`}>
            {sport}
          </div>
          {getStatusBadge()}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              {teamA.logo ? (
                <img src={teamA.logo} alt={teamA.name} className="w-6 h-6" />
              ) : (
                <span className="text-lg font-bold">{teamA.name.charAt(0)}</span>
              )}
            </div>
            <span className="text-sm font-medium mt-1">{teamA.name}</span>
            <span className={`text-lg font-bold ${matchStatus === 'live' ? 'animate-score-pulse' : ''}`}>
              {teamA.score}
            </span>
          </div>

          <div className="flex flex-col items-center mx-2">
            <span className="text-xs text-gray-500 mb-1">{timeInfo}</span>
            <span className="text-lg font-bold">VS</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              {teamB.logo ? (
                <img src={teamB.logo} alt={teamB.name} className="w-6 h-6" />
              ) : (
                <span className="text-lg font-bold">{teamB.name.charAt(0)}</span>
              )}
            </div>
            <span className="text-sm font-medium mt-1">{teamB.name}</span>
            <span className={`text-lg font-bold ${matchStatus === 'live' ? 'animate-score-pulse' : ''}`}>
              {teamB.score}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveMatchCard;
