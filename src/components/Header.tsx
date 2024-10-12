import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#141c33' }}> 
      <Toolbar>
        <Typography 
          variant="h6" 
          className="flex-1" 
          sx={{ 
            fontWeight: 400, 
            fontFamily: 'Anton, sans-serif', 
            letterSpacing: '0.05rem' 
          }}
        >
          7482 Sports Video Highlights
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
