import { Question } from '../interfaces/Question';

export const BASE_URL =
  'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

export function getQuestions(): Promise<Question[]> {
  return fetch(BASE_URL)
    .then((res) => res.json())
    .then(({ results }) => results);
}
