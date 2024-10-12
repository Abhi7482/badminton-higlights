import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const mockData = [
  {
    sessionId: 1,
    matchId: 1,
    sport: 'badminton',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    teams: {
      Sudeep: { score: 21, statistics: { caloriesBurned: 100, shotAccuracy: 90 } },
      Saket: { score: 19, statistics: { caloriesBurned: 80, shotAccuracy: 85 } }
    },
    keyMoments: [
      { time: 30, description: 'Sudeep scores a great point' },
      { time: 60, description: 'Saket makes an amazing comeback' }
    ],
    // Updated thumbnail URL
    thumbnailUrl: 'https://i.postimg.cc/sggrQyhY/pexels-vladvictoria-10544231.jpg' 
  }
];

app.get('/highlights', (req, res) => {
  res.json(mockData);
});

// Ensure that this log message is present to confirm the server is running
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
