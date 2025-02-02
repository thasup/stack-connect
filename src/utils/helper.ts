const GAME_DATA_KEY = "game-data";

interface Participant {
  name: string;
  score: {
    correct: number;
    wrong: number;
  };
}

interface GameData {
  participants: Participant[];
}

export const getGameData = (): GameData => {
  const storedData = localStorage.getItem(GAME_DATA_KEY);
  return storedData ? JSON.parse(storedData) : { participants: [] };
};

export const setGameData = (data: GameData) => {
  localStorage.setItem(GAME_DATA_KEY, JSON.stringify(data));
};

export const addParticipant = (name: string) => {
  const gameData = getGameData();
  gameData.participants.push({ name, score: { correct: 0, wrong: 0 } });
  setGameData(gameData);
};

export const updateScore = (participantName: string, correct: boolean) => {
  const gameData = getGameData();
  const participant = gameData.participants.find((person) => person.name === participantName);
  if (participant) {
    if (correct) {
      participant.score.correct++;
    } else {
      participant.score.wrong++;
    }
    setGameData(gameData);
  }
};