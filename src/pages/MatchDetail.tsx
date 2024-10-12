import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Highlight } from '../types';
import { Typography, Paper } from '@mui/material';
import { AuroraBackground } from '../components/aurora-background';

const MatchDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [match, setMatch] = useState<Highlight | null>(null);

  useEffect(() => {
    axios.get<Highlight[]>('http://localhost:4000/highlights')
      .then(response => {
        const selectedMatch = response.data.find(h => h.matchId === Number(id));
        setMatch(selectedMatch || null);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!match) {
    return <div>Loading...</div>;
  }

  return (
    <AuroraBackground> {/* Wrap content with AuroraBackground */}
      <div className="relative z-10 p-6"> {/* Ensure this div is above the AuroraBackground */}
        <Typography 
          variant="h4" 
          className="text-center mb-4" 
          style={{ fontFamily: 'Playfair Display, serif', color: 'white' }}
        >
          Match Details {match.matchId}
        </Typography>
        <Paper 
          className="rounded-lg shadow-md" 
          style={{ backgroundColor: '#141c33', borderRadius: '0.8rem', padding: '1rem' }} // Reduced padding
        >
          <ReactPlayer 
            url={match.videoUrl} 
            controls 
            width="100%" 
            height="400px" 
          />
        </Paper>
        <Typography 
          variant="h6" 
          className="mt-4" 
          style={{ color: 'white' }}
        >
          Statistics
        </Typography>
        <div className="my-2">
          {Object.entries(match.teams).map(([teamName, team]) => (
            <div key={teamName} className="mb-2">
              <Typography variant="subtitle1" style={{ color: 'white' }}>{teamName}</Typography>
              <Typography style={{ color: 'white' }}>Score: {team.score}</Typography>
              <Typography style={{ color: 'white' }}>Calories Burned: {team.statistics.caloriesBurned}</Typography>
              <Typography style={{ color: 'white' }}>Shot Accuracy: {team.statistics.shotAccuracy}%</Typography>
            </div>
          ))}
        </div>
        <Typography 
          variant="h6" 
          style={{ color: 'white' }}
        >
          Key Moments
        </Typography>
        <ul>
          {match.keyMoments.map((moment, index) => (
            <li key={index} style={{ color: 'white' }}>
              {moment.time}s - {moment.description}
            </li>
          ))}
        </ul>
      </div>
    </AuroraBackground>
  );
};

export default MatchDetail;
