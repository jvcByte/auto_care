import React, { useEffect } from 'react';
import {
  CircularProgress,
  Typography,
  Box,
} from '@mui/material';

const Timer = ({ timeLeft, onTimeUp }) => {
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        onTimeUp();
      }, timeLeft * 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, onTimeUp]);

  return (
    <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
      <CircularProgress
        variant="determinate"
        value={(timeLeft / 30) * 100}
        size={40}
        thickness={4}
        sx={{ mr: 2 }}
      />
      <Typography>{timeLeft}s</Typography>
    </Box>
  );
};

export default Timer;
