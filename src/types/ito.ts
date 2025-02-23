export interface ItoQuestion {
  question: string;
  least: string;
  most: string;
}

export interface ItoResponse {
  data: ItoQuestion;
  audio: string;
}