import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  LinearProgress,
} from '@mui/material';
import Question from '../components/Question';
import questionsData from '../data/questions.json';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [questions] = useState(questionsData.questions);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    if (currentQuestionIndex === questions.length) {
      setShowResults(true);
    }
  }, [currentQuestionIndex, questions.length]);

  if (showResults) {
    return (
      <Box
        sx={{
          mt: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="div" gutterBottom>
          Quiz Complete!
        </Typography>
        <Typography variant="h5" component="div" gutterBottom>
          Your Score: {score}/{questions.length}
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            setCurrentQuestionIndex(0);
            setScore(0);
            setShowResults(false);
          }}
        >
          Play Again
        </Button>
      </Box>
    );
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" component="div" gutterBottom>
          Question {currentQuestionIndex + 1}/{questions.length}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={(currentQuestionIndex / questions.length) * 100}
          sx={{ mb: 4 }}
        />
        <Question
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      </Box>
    </Container>
  );
};

export default Quiz;
