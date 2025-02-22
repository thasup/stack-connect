export interface SoundsFishyScenario {
  question: string
  answer: string
  reference: string
  category: string
  lang: string
}

export interface SoundsFishyAudio {
  questionAudio: string
  answerAudio: string
  referenceAudio: string
}

export interface SoundsFishyResponse extends SoundsFishyAudio {
  scenario: string;
}