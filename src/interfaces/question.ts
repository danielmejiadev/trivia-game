export interface Question {
  id: number;
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  isCorrect: boolean;
  incorrect_answers: string[];
}
