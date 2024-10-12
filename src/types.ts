export interface Statistics {
  caloriesBurned: number;
  shotAccuracy: number;
}

export interface Team {
  score: number;
  statistics: Statistics;
}

export interface Highlight {
  sessionId: number; // Keep this if necessary for your data
  matchId: number;
  type: string;
  sport: string;
  videoUrl: string;
  teams: {
    [key: string]: Team;
  };
  keyMoments: {
    time: number;
    description: string;
  }[];
  start_time: string;
  end_time: string;
  thumbnailUrl: string; // Add this line for the thumbnail URL
}