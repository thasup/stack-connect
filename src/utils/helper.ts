import { GameData } from "@/types/feelinks";

const GAME_DATA_KEY = "game-data";

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

export const removeParticipant = (name: string) => {
  const gameData = getGameData();
  gameData.participants = gameData.participants.filter((p) => p.name !== name);
  setGameData(gameData);
}

export const updateScore = (participantName: string, correct: boolean) => {
  const { participants } = getGameData();
  const updatedParticipants = participants.map((participant) => {
    if (participant.name === participantName) {
      const x = {
        ...participant,
        score: {
          ...participant.score,
          [correct ? "correct" : "wrong"]: participant.score[correct ? "correct" : "wrong"] + 1,
        },
      };
      return x;
    }
    return participant;
  });
  setGameData({ participants: updatedParticipants });
};

export const resetGameData = () => {
  // reset "game-data" local storage
  localStorage.removeItem(GAME_DATA_KEY);
}

export const shuffleArray = <T>(arr: T[]): T[] => {
  return arr.slice().sort(() => Math.random() - 0.5);
};