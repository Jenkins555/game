import React, { useState } from 'react';
import '../css/player.css';

const Player = ({ playerNumber, onPlayerCreated }) => {
  // Состояния для хранения данных об игроке
  const [name, setName] = useState('');
  const [selectedClass, setSelectedClass] = useState('Воин');
  const [selectedColor, setSelectedColor] = useState('red');
  
  // Обработчик клика на кнопке "Создать игрока"
  const handleCreatePlayer = () => {
    const player = {
      number: playerNumber,
      name,
      playerClass: selectedClass,
      color: selectedColor,
    };
    
    // Вызываем колбэк, чтобы передать информацию о созданном игроке в родительский компонент
    onPlayerCreated(player);
  };

  return (
    <div className="player">
      <h2>Игрок {playerNumber}</h2>
      <div>
        <label>Имя:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Класс:</label>
        <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
          <option value="Воин">Воин</option>
          <option value="Маг">Маг</option>
          <option value="Лучник">Лучник</option>
        </select>
      </div>
      <div>
        <label>Цвет фишки:</label>
        <div className="color-selector">
          <div
            className={`color-option red ${selectedColor === 'red' ? 'selected' : ''}`}
            onClick={() => setSelectedColor('red')}
          ></div>
          <div
            className={`color-option green ${selectedColor === 'green' ? 'selected' : ''}`}
            onClick={() => setSelectedColor('green')}
          ></div>
          <div
            className={`color-option blue ${selectedColor === 'blue' ? 'selected' : ''}`}
            onClick={() => setSelectedColor('blue')}
          ></div>
          <div
            className={`color-option yellow ${selectedColor === 'yellow' ? 'selected' : ''}`}
            onClick={() => setSelectedColor('yellow')}
          ></div>
        </div>
      </div>
      <button onClick={handleCreatePlayer}>Создать игрока</button>
    </div>
  );
};

export default Player;
