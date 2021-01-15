import { useCallback, useEffect, useReducer } from 'react';

// Interfaces
import { Question } from '../interfaces/Question';

// Hooks
import { useFetch } from './useFetch';

// Client
import { getQuestions } from '../apiClient/questions';

const initialState = {
  questions: [] as Question[],
  currentIndex: 0
};

type State = typeof initialState;

export enum ActionTypes {
  SET = 'SET',
  ANSWER_QUESTION = 'ANSWER_QUESTION'
}

interface Action {
  type: ActionTypes;
  payload: any;
}

function triviaReducer(state: State, { type, payload }: Action): State {
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

export function useTrivia() {
  const [results, state] = useFetch<Question[]>(getQuestions, []);
  const [trivia, dispatch] = useReducer(triviaReducer, initialState);
  const { questions, currentIndex } = trivia;

  useEffect(() => {
    dispatch({
      type: ActionTypes.SET,
      payload: results.map((result, index) => ({ ...result, id: index }))
    });
  }, [results]);

  const currentQuestion = questions[currentIndex];
  const totalQuestion = questions.length;
  const questionAnswered = useCallback(
    (x) => {
      const { correct_answer: correctAnswer } = currentQuestion;
      dispatch({
        type: ActionTypes.ANSWER_QUESTION,
        payload: {
          isCorrect: JSON.parse(correctAnswer.toLowerCase()) === x > 0,
          currentQuestion
        }
      });
    },
    [currentQuestion]
  );

  return {
    questions,
    currentIndex,
    currentQuestion,
    totalQuestion,
    questionAnswered,
    state
  };
}
