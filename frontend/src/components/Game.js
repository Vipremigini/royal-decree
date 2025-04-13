import React, { useState, useEffect } from 'react';

const Game = ({ currentPlayer, roles, onGuess }) => {
  const [guess, setGuess] = useState('');

  const handleGuess = () => {
    onGuess(guess);
    setGuess('');
  };

  return (
    <div>
      <h2>{currentPlayer}'s Turn</h2>
      <p>Your role: {roles[currentPlayer]}</p>
      <input 
        type="text" 
        value={guess} 
        onChange={(e) => setGuess(e.target.value)} 
        placeholder="Guess the next role"
      />
      <button onClick={handleGuess}>Guess</button>
    </div>
  );
};

export default Game;
