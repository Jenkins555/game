// App.js
import React from 'react';
import Board from './component/Board';
import Deck from './component/Deck';
import './App.css';

const App = () => {
  const monsterDeck = [
    { title: "Монстр 1", description: "Описание монстра 1" },
    { title: "Монстр 2", description: "Описание монстра 2" },
    { title: "Монстр 3", description: "Описание монстра 3" },
    { title: "Монстр 4", description: "Описание монстра 4" },
    { title: "Монстр 5", description: "Описание монстра 5" },
    // ... Другие карты монстров
  ];

  return (
    <div className="app">
      <h1>Настольная игра</h1>
      <Board />
      <Deck name="Колода монстров" cards={monsterDeck} backImage="path/to/monsterBack.jpg" />
      {/* Создайте и отобразите другие колоды с разными картами и рубашками */}
   
    </div>
  );
};

export default App;
