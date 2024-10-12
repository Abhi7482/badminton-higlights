
import React from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  url: string; // The URL of the video to play
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  return (
    <div>
      <ReactPlayer url={url} controls width="100%" height="100%" />
    </div>
  );
};

export default VideoPlayer;
