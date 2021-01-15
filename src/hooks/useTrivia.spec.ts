import { renderHook, act } from '@testing-library/react-hooks';
import * as Fetch from './useFetch';
import { useTrivia } from './useTrivia';

describe('useTrivia hook', () => {
  const LEFT = -1;
  const RIGHT = 1;

  it('should handle trivia', async () => {
    const question = { question: 'question1', correct_answer: 'True' };

    jest
      .spyOn(Fetch, 'useFetch')
      .mockReturnValue([[question, question], Fetch.States.FETCHED] as any);
    const { result } = renderHook(() => useTrivia());

    expect(result.current.currentIndex).toEqual(0);
    expect(result.current.currentQuestion).toEqual({ ...question, id: 0 });
    expect(result.current.totalQuestion).toEqual(2);
    expect(result.current.state).toEqual(Fetch.States.FETCHED);

    // Simulate true answer
    act(() => result.current.questionAnswered(RIGHT));
    expect(result.current.currentIndex).toEqual(1);
    expect(result.current.currentQuestion).toEqual({ ...question, id: 1 });

    // Simulate false answer
    act(() => result.current.questionAnswered(LEFT));
    expect(result.current.currentIndex).toEqual(2);
    expect(result.current.currentQuestion).toEqual(undefined);
    expect(result.current.questions).toEqual([
      { ...question, isCorrect: true, id: 0 },
      { ...question, isCorrect: false, id: 1 }
    ]);
  });
});
