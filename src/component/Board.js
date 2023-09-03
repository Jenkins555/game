// Board.js
import React, { useState } from 'react';
import '../css/board.css'
import Card from './Card';

const locations = [
  'Лес', 'Лес', 'Лес', 'Лес', 'Лес', 'Лес', 'Лес',
  'Озеро', 'Озеро', 'Озеро',
  'Город', 'Город',
  'Храм',
  'Подземелье слабое',
  'Подземелье среднее',
  'Подземелье сильное',
  'Руины', 'Руины', 'Руины', 'Руины'
];

const shuffleArray = (array) => {
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Board = () => {
  const [cards, setCards] = useState(shuffleArray(locations).map(location => ({
    location,
    isFlipped: false
  })));

  const handleCardClick = (index) => {
    const newCards = cards.map((card, i) => {
      if (i === index) {
        return { ...card, isFlipped: true };
      }
      return card;
    });
    setCards(newCards);
  };

  const handleRefreshClick = () => {
    setCards(shuffleArray(cards.map(card => ({ ...card, isFlipped: false }))));
  };

  return (
    <div className="board">
      <button onClick={handleRefreshClick}>Обновить поле</button>
      <div className="cards">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.isFlipped ? card.location : 'Карта'}
            isFlipped={card.isFlipped}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;