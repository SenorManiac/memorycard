// Create a presentational component named Card.
// Props: imageUrl, title, onClick.
// Render an image with the given imageUrl.
// Render a title below the image.
// Add an onClick handler to handle user interactions.
// Style to include a hover effect that slightly scales the card.

import React from 'react';
import './card.css';

function Card({ id, imageUrl, title, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={imageUrl} id ={id} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default Card;