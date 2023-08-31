// Deck.js
import React, { useState } from 'react';
import Card from './Cards';
import '../css/deckStyles.css';

const Deck = ({ name, cards, backImage }) => {
  const [openCards, setOpenCards] = useState([]);
  const [remainingCards, setRemainingCards] = useState(cards);
  const [zIndexCounter, setZIndexCounter] = useState(0);

  const handleCardClick = () => {
    if (remainingCards.length > 0) {
      setZIndexCounter(prevZIndex => prevZIndex + 1); // Increment zIndex counter
      setOpenCards(prevOpenCards => [
        ...prevOpenCards,
        { ...remainingCards[0], id: new Date().getTime(), zIndex: zIndexCounter }, // Add zIndex
      ]);
      setRemainingCards(prevRemainingCards => prevRemainingCards.slice(1));
    } else {
      setRemainingCards([...openCards.map(card => ({ ...card, id: new Date().getTime(), zIndex: zIndexCounter })), ...remainingCards]);
      setOpenCards([]);
      setZIndexCounter(prevZIndex => prevZIndex + 1);
      shuffle(remainingCards);
    }
  };

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  return (
    <div className="deck">
      <h2>{name}</h2>
      <div className="deck-cards">
        {openCards.map((card, index) => (
          <Card key={card.id} title={card.title} description={card.description} zIndex={card.zIndex} />
        ))}
      </div>
      <div className="deck-pile" onClick={handleCardClick}>
        <span>Колода</span>
      </div>
    </div>
  );
};

export default Deck;
