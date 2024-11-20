// Create the main application component named App.
  // State:
    // currentScore: Tracks the user’s current score.
    // bestScore: Tracks the highest score achieved.
  // Define an apiKey for the Giphy API.
  // Event Handler: handleCardSelection.
    // Increment the currentScore each time a card is clicked.
    // If the currentScore exceeds bestScore, update bestScore.
  // Render the Scoreboard and CardContainer components.
    // Pass currentScore and bestScore to Scoreboard.
    // Pass the Giphy apiKey and handleCardSelection to CardContainer.

import React, { useState } from 'react';
import Scoreboard from './components/Scoreboard/Scorboard.jsx';
import CardContainer from './components/CardContainer/CardContainer.jsx';
import './App.css';


function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const apiKey = 'mcgY2P438mvzTJarUZ2MMp6rjavWDvwK';
  const handleCardSelection = (reset = false) => {
    if (reset) {
      setCurrentScore(0);
    } else {
      setCurrentScore(prevScore => {
        const newScore = prevScore + 1;
        if (newScore > bestScore) {
          setBestScore(newScore);
        }
        return newScore;
      });
    }
  };


  

  return (
    <div className="app">
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <CardContainer apiKey={apiKey} handleCardSelection={handleCardSelection} />
    </div>
  );
}
export default App
