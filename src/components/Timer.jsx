import React, { useEffect, useState } from 'react';
import {
  CircularProgress,
  Typography,
  Box,
} from '@mui/material';

const Timer = ({ timeLimit, onTimeUp }) => {
  const [secondsLeft, setSecondsLeft] = useState(timeLimit);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    if (timeLimit > 0) {
      const newTimer = setInterval(() => {
        setSecondsLeft(prev => {
          const newTime = prev - 1;
          if (newTime <= 0) {
            onTimeUp();
            return 0;
          }
          return newTime;
        });
      }, 1000);
      setTimerId(newTimer);
    }
    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [timeLimit, onTimeUp]);

  useEffect(() => {
    if (secondsLeft <= 0) {
      onTimeUp();
    }
  }, [secondsLeft, onTimeUp]);

  return (
    <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
      <CircularProgress
        variant="determinate"
        value={(secondsLeft / timeLimit) * 100}
        size={40}
        thickness={4}
        sx={{ mr: 2 }}
      />
      <Typography>{secondsLeft}s</Typography>
    </Box>
  );
};

export default Timer;
