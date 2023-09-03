import React, { useState } from 'react';
import Player from './Player'; // Подключите компонент Player

const PlayerList = () => {
  const [players, setPlayers] = useState([]); // Состояние для хранения информации об игроках
  const [isAddingPlayer, setIsAddingPlayer] = useState(false); // Состояние для управления видимостью окна создания игрока

  const handlePlayerCreated = (player) => {
    // Функция для добавления нового игрока в состояние
    setPlayers([...players, player]);
    // Закрываем окно создания игрока после его создания
    setIsAddingPlayer(false);
  };

  const handleAddPlayerClick = () => {
    // Открываем окно создания игрока по нажатию кнопки "Добавить игрока"
    setIsAddingPlayer(true);
  };

  return (
    <div>
      {/* Здесь отображайте уже созданных игроков */}
      {players.map((player, index) => (
        <div key={index}>
          <h2>Игрок {player.number}</h2>
          <p>Имя: {player.name}</p>
          <p>Класс: {player.playerClass}</p>
          <p>Цвет фишки: {player.color}</p>
          {/* Другие характеристики игрока */}
        </div>
      ))}

      {/* Отображение компонента Player только если isAddingPlayer === true */}
      {isAddingPlayer && (
        <Player playerNumber={players.length + 1} onPlayerCreated={handlePlayerCreated} />
      )}

      {/* Кнопка "Добавить игрока", отображаемая после создания игрока */}
      {!isAddingPlayer && (
        <button onClick={handleAddPlayerClick}>Добавить игрока</button>
      )}
    </div>
  );
};

export default PlayerList;
