// Create a component named Scoreboard.
// Props: currentScore, bestScore.
// Render two headings to display currentScore and bestScore.
// Style to visually highlight the scores and make them prominent at the top of the page.

import React from 'react';
import './Scoreboard.css';

function Scoreboard({ currentScore, bestScore }) {
  return (
    <div className="scoreboard">
      <h2>Current Score: {currentScore}</h2>
      <h2>Best Score: {bestScore}</h2>
    </div>
  );
}

export default Scoreboard;