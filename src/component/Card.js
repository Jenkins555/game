// Card.js
import React from 'react';
import '../css/card.css'

const Card = ({ title, image, isFlipped, onClick }) => {
  return (
    <div
      className={`card ${isFlipped ? 'flipped' : ''}`}
      onClick={onClick}
    >
      <div className="card-content">
        <h3>{title}</h3>
        {image && <img src={image} alt={title} />}
      </div>
    </div>
  );
};

export default Card;
