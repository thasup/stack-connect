export interface Emotion {
  name: string;
  emoji: string;
}

export interface Participant {
  name: string;
  score: {
    correct: number;
    wrong: number;
  };
  answer?: string;
}

export interface GameData {
  participants: Participant[];
}