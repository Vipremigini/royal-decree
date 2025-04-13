import React, { useState } from 'react';

const Lobby = ({ players, roomCode, onStartGame }) => {
  return (
    <div>
      <h1>Lobby - Room Code: {roomCode}</h1>
      <div>
        {players.map(player => (
          <p key={player}>{player}</p>
        ))}
      </div>
      <button onClick={onStartGame}>Start Game</button>
    </div>
  );
};

export default Lobby;
