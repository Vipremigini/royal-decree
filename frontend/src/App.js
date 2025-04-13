import React, { useState } from 'react';
import Lobby from './components/Lobby';
import Game from './components/Game';
import Scoreboard from './components/Scoreboard';

const App = () => {
  const [players, setPlayers] = useState([]);
  const [roomCode, setRoomCode] = useState('');
  const [isGameStarted, setIsGameStarted] = useState(false);

  const startGame = () => {
    setIsGameStarted(true);
  };

  return (
    <div>
      {isGameStarted ? (
        <>
          <Game currentPlayer="Player1" roles={{ Player1: 'King', Player2: 'Prince' }} onGuess={(guess) => console.log(guess)} />
          <Scoreboard scores={[{ player: 'Player1', points: 1000 }, { player: 'Player2', points: 900 }]} />
        </>
      ) : (
        <Lobby players={players} roomCode={roomCode} onStartGame={startGame} />
      )}
    </div>
  );
};

export default App;
