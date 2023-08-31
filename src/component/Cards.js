// Card.js
import React from 'react';
import '../css/deckStyles.css';

const Cards = ({ title, onClick, zIndex }) => {
  const cardStyle = {
    zIndex: zIndex,
  };

  return (
    <div className="deck-card" onClick={onClick} style={cardStyle}>
      {title}
    </div>
  );
};

export default Cards;
