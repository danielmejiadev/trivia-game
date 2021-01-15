import { Question } from '../interfaces/Question';

const QUIZ_BASE_URL =
  'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

export function getQuestions(): Promise<Question[]> {
  return fetch(QUIZ_BASE_URL)
    .then((res) => res.json())
    .then(({ results }) => results);
}
