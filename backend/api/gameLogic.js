const roles = ['King', 'Prince', 'Princess', 'Duke', 'Police', 'Thief'];

export const getRoles = (players) => {
  let assignedRoles = {};
  let shuffledRoles = [...roles].slice(0, players.length);
  shuffledRoles.sort(() => Math.random() - 0.5); // Shuffle roles

  players.forEach((player, index) => {
    assignedRoles[player] = shuffledRoles[index];
  });

  return assignedRoles;
};
