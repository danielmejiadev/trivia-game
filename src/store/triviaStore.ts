// Interfaces
import { Question } from '../interfaces/Question';

export const initialState = {
  questions: [] as Question[],
  currentIndex: 0
};

export type State = typeof initialState;

export enum ActionTypes {
  SET = 'SET',
  ANSWER_QUESTION = 'ANSWER_QUESTION'
}

export interface Action {
  type: ActionTypes;
  payload: any;
}

export function triviaReducer(state: State, { type, payload }: Action): State {
  switch (type) {
    case ActionTypes.SET:
      return {
        ...state,
        questions: payload
      };
    case ActionTypes.ANSWER_QUESTION:
      const { currentQuestion, isCorrect } = payload;
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        questions: state.questions.map((question) => {
          if (question.id === currentQuestion.id) {
            return {
              ...question,
              isCorrect
            };
          }

          return question;
        })
      };
  }
}
