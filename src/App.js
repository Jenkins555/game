// App.js
import React, { useState } from 'react';
import Board from './component/Board';
import Deck from './component/Deck';
import './App.css';
import Player from './component/Player';
import PlayerList from './component/PlayerList'

const App = () => {
  const monsterDeck = [
    { title: "Монстр 1", description: "Описание монстра 1" },
    { title: "Монстр 2", description: "Описание монстра 2" },
    { title: "Монстр 3", description: "Описание монстра 3" },
    { title: "Монстр 4", description: "Описание монстра 4" },
    { title: "Монстр 5", description: "Описание монстра 5" },
    // ... Другие карты монстров
  ];

  // Состояние для хранения информации об игроках
  const [players, setPlayers] = useState([]);

  // Функция для добавления нового игрока в состояние
  const handlePlayerCreated = (player) => {
    setPlayers([...players, player]);
  };

  return (
    <div className="app">
      <h1>Настольная игра</h1>
      <Board />
      <Deck name="Колода монстров" cards={monsterDeck} backImage="path/to/monsterBack.jpg" />
      {/* Создайте и отобразите другие колоды с разными картами и рубашками */}
      {/* Передайте функцию handlePlayerCreated в компонент Player */}
      
      <PlayerList />
    </div>
  );
};

export default App;
