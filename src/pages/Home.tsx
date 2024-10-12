"use client";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Highlight } from '../types';
import { Typography, Card, CardContent, Button } from '@mui/material';
import { AuroraBackground } from '../components/aurora-background';

const Home = () => {
  const [highlights, setHighlights] = useState<Highlight[]>([]);

  useEffect(() => {
    axios.get<Highlight[]>('http://localhost:4000/highlights')
      .then(response => setHighlights(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <AuroraBackground showRadialGradient={true}>
      <div className="p-6 min-h-screen relative z-10">
        {/* Hero Section */}
        <div 
          className="bg-[#141c33] text-[#fefeff] p-10 shadow-lg mb-6 backdrop-filter backdrop-blur-md bg-opacity-50" 
          style={{ borderRadius: '0.9rem' }} 
        >
          <Typography 
            variant="h2" 
            gutterBottom 
            className="text-center" 
            sx={{ 
              fontFamily: 'Playfair Display, serif',
              color: '#f9b178' // Apply the specified color
            }}
          >
            Welcome to Sports Highlights
          </Typography>
          <Typography 
            variant="h5" 
            className="text-center" 
            sx={{ 
              fontFamily: 'Playfair Display, serif',
              color: '#f9b178' // Apply the specified color
            }}
          >
            Watch the best moments from your favorite sports!
          </Typography>
        </div>

        {/* Highlights List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Existing Highlight Cards */}
          {highlights.map((highlight) => (
            <Card 
              key={highlight.matchId} 
              className="shadow-lg hover:shadow-2xl transition-shadow duration-300 backdrop-filter backdrop-blur-md bg-opacity-20" // Adjusted opacity for glass effect
              style={{ 
                borderRadius: '0.9rem', // Ensure rounded corners for the Card
                backgroundColor: 'rgba(20, 28, 51, 0.5)' // Use rgba for transparency
              }}
            >
              <CardContent 
                style={{ 
                  borderRadius: '0.9rem', // Keep this consistent
                  color: '#fefeff', // Set text color
                  padding: '1rem' // Ensure sufficient padding inside
                }} 
              >
                <Link to={`/match/${highlight.matchId}`}>
                  <img 
                    src={highlight.thumbnailUrl} // Use the URL for the thumbnail
                    alt={`${highlight.sport} Match ${highlight.matchId}`} 
                    className="w-full h-40 object-cover rounded-[0.9rem]" // Crop and ensure rounded corners
                  />
                </Link>
                <Typography variant="h5" component="div" className="font-bold mt-2">
                  {highlight.sport} Match {highlight.matchId}
                </Typography>
                <Typography>
                  Score: {highlight.teams.Sudeep.score} - {highlight.teams.Saket.score}
                </Typography>
                <Link to={`/match/${highlight.matchId}`}>
                  <Button 
                    variant="contained" 
                    className="mt-2 rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105" // Add scale transform on hover
                    style={{
                      backgroundColor: '#f9b079', // Set the button's background color
                      color: '#141c33', // Optionally set text color for contrast
                    }}
                  >
                    Watch Highlights
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}

          {/* Dummy Card 1 */}
          <Card 
            className="shadow-lg hover:shadow-2xl transition-shadow duration-300 backdrop-filter backdrop-blur-md bg-opacity-20" // Adjusted opacity for glass effect
            style={{ 
              borderRadius: '0.9rem', 
              backgroundColor: 'rgba(20, 28, 51, 0.5)' // Use rgba for transparency
            }}
          >
            <CardContent 
              style={{ 
                borderRadius: '0.9rem', 
                color: '#fefeff', 
                padding: '1rem' 
              }} 
            >
              <Link to="#">
                <img 
                  src="https://i.postimg.cc/sggrQyhY/pexels-vladvictoria-10544231.jpg" // Placeholder image URL
                  alt="Dummy Match 2" 
                  className="w-full h-40 object-cover rounded-[0.9rem]" // Crop and ensure rounded corners
                />
              </Link>
              <Typography variant="h5" component="div" className="font-bold mt-2">
                Badminton Match 2
              </Typography>
              <Typography>
                Score: 25 - 22
              </Typography>
              <Link to={`/match/1`}> {/* Change to route to the same place as the first button */}
                <Button 
                  variant="contained" 
                  className="mt-2 rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105" // Add scale transform on hover
                  style={{
                    backgroundColor: '#f9b079', 
                    color: '#141c33',
                  }}
                >
                  Watch Highlights
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Dummy Card 2 */}
          <Card 
            className="shadow-lg hover:shadow-2xl transition-shadow duration-300 backdrop-filter backdrop-blur-md bg-opacity-20" // Adjusted opacity for glass effect
            style={{ 
              borderRadius: '0.9rem', 
              backgroundColor: 'rgba(20, 28, 51, 0.5)' // Use rgba for transparency
            }}
          >
            <CardContent 
              style={{ 
                borderRadius: '0.9rem', 
                color: '#fefeff', 
                padding: '1rem' 
              }} 
            >
              <Link to="#">
                <img 
                  src="https://i.postimg.cc/sggrQyhY/pexels-vladvictoria-10544231.jpg" // Placeholder image URL
                  alt="Dummy Match 3" 
                  className="w-full h-40 object-cover rounded-[0.9rem]" // Crop and ensure rounded corners
                />
              </Link>
              <Typography variant="h5" component="div" className="font-bold mt-2">
                Badminton Match 3
              </Typography>
              <Typography>
                Score: 19 - 21
              </Typography>
              <Link to={`/match/1`}> {/* Change to route to the same place as the first button */}
                <Button 
                  variant="contained" 
                  className="mt-2 rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105" // Add scale transform on hover
                  style={{
                    backgroundColor: '#f9b079', 
                    color: '#141c33',
                  }}
                >
                  Watch Highlights
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </AuroraBackground>
  );
};

export default Home;
