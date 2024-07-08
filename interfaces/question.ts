export interface Question {
  id: number;
  created_at: string;
  question: string;
}

export interface QAInput {
  question: string;
  answer: string;
  duration: string;
  type: string;
}