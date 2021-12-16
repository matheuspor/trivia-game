export const updateLocalStorage = ({ PlayerAssertions, PlayerScore }, player) => {
  const localStorageObj = {
    player: {
      name: player.name,
      assertions: PlayerAssertions,
      score: PlayerScore,
      gravatarEmail: player.email,
      picture: player.avatar,
    },
  };
  localStorage.setItem('state', JSON.stringify(localStorageObj));
};

export const updateRanking = () => {
  const playerInfo = JSON.parse(localStorage.getItem('state'));

  const player = {
    name: playerInfo.player.name,
    score: playerInfo.player.score,
    picture: playerInfo.player.picture,
  };

  const getRanking = JSON.parse(localStorage.getItem('ranking'));
  if (getRanking) {
    localStorage.setItem('ranking', JSON.stringify([...getRanking, player]));
  } else localStorage.setItem('ranking', JSON.stringify([player]));
};
