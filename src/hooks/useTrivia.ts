import { useCallback, useEffect, useReducer } from 'react';
import he from 'he';

// Interfaces
import { Question } from '../interfaces/Question';

// Hooks
import { useFetch } from './useFetch';

// Client
import { getQuestions } from '../apiClient/questions';

// Store
import { triviaReducer, initialState, ActionTypes } from '../store/triviaStore';

export function useTrivia() {
  const [results, state] = useFetch<Question[]>(getQuestions, []);
  const [trivia, dispatch] = useReducer(triviaReducer, initialState);
  const { questions, currentIndex } = trivia;

  useEffect(() => {
    dispatch({
      type: ActionTypes.SET,
      payload: results.map((result, index) => ({
        ...result,
        question: he.decode(result.question),
        id: index
      }))
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
