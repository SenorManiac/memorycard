// State: cards to hold fetched data.
// Effect: Use a hook to fetch images from the Giphy API on component mount.
// Call the fetchGiphyImages function.
// Set the fetched data to the cards state.
// Event Handler: handleCardClick to shuffle cards.
// Create a function to randomize the order of cards.
// Update the cards state with the shuffled order.
// Render a grid of Card components, passing imageUrl, title, and handleCardClick as props to each Card.
// Add a function that tracks the cards a user has clicked on.
// use the handleCardClick function to increment the score if the last card clicked is unique. 

import React, { useState, useEffect } from 'react';
import { fetchGiphyImages } from '../../api/fetchimages';
import Card from '../Card/Card';
import './CardContainer.css';

function CardContainer({ apiKey,handleCardSelection }) {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    fetchGiphyImages(apiKey).then(data => setCards(data));
  }, [apiKey]);

  const handleCardClick = () => {
    setCards(shuffle(cards));
  };

  const shuffle = array => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleCardSelectionInternal = (event) => {
    const targetId = event.target.id; 
  
    if (clickedCards.includes(targetId)) {
      setClickedCards([]);
      handleCardSelection(true);
    } else {
      setClickedCards([...clickedCards, targetId]);
      handleCardClick();
      console.log(targetId); 
      handleCardSelection(); 
    }
  };


  return (
    <div className="card-container">
      {cards.map(card => (
        <Card
          key={card.id}
          id={card.id}
          imageUrl={card.url}
          title={card.title}
          onClick={handleCardSelectionInternal}
        />
      ))}
    </div>
  );
}


export default CardContainer;