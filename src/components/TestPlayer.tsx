import React from 'react';
import ReactPlayer from 'react-player';

const TestPlayer: React.FC = () => {
  return (
    <div>
      <h2>Test Video Player</h2>
      <ReactPlayer 
        url="https://www.w3schools.com/html/mov_bbb.mp4" 
        controls 
        width="100%" 
        height="400px" 
      />
    </div>
  );
};

export default TestPlayer;
