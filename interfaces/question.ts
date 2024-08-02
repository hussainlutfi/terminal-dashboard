export interface Question {
  id: number;
  created_at: string;
  question: string;
}

export interface QuestionMajor {
  id: number;
  created_at: string;
  question: string;
  major: string;
}

export interface QAInput {
  question: string;
  answer: string;
  type: string;
}

export interface QAInterface {
  id: number;
  question: string;
  answer: string;
  type: string;
}
