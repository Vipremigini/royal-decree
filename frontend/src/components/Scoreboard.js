import React from 'react';

const Scoreboard = ({ scores }) => {
  return (
    <div>
      <h2>Scoreboard</h2>
      {scores.map((score, index) => (
        <div key={index}>
          {score.player}: {score.points} points
        </div>
      ))}
    </div>
  );
};

export default Scoreboard;
