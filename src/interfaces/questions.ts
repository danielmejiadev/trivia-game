import { Question } from './question';

export interface Questions {
  response_code: number;
  results: Question[];
}
