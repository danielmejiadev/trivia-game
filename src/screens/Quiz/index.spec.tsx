import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ActivityIndicator } from 'react-native';

import Quiz from './index';

// Components
import QuestionCard from '../../components/QuestionCard';
import AnimatedCard from '../../components/AnimatedCard';
import Results from '../../components/Results';
import AppButton from '../../components/AppButton';

import { States } from '../../hooks/useFetch';
import * as Trivia from '../../hooks/useTrivia';

jest.mock('../../components/AnimatedCard', () => jest.fn());

describe('Quiz', () => {
  let wrapper: ShallowWrapper;
  const replace = jest.fn();
  const question = { question: 'question', category: 'Music' };

  const props = {
    navigation: { replace }
  } as any;

  it('should render loading', () => {
    jest.spyOn(Trivia, 'useTrivia').mockReturnValue({
      currentIndex: 0,
      currentQuestion: question as any,
      questions: [],
      totalQuestion: 0,
      questionAnswered: jest.fn(),
      state: States.LOADING
    });

    wrapper = shallow(<Quiz {...props} />);
    expect(wrapper.find(ActivityIndicator).props()).toBeTruthy();
  });

  it('should render error', () => {
    jest.spyOn(Trivia, 'useTrivia').mockReturnValue({
      currentIndex: 0,
      currentQuestion: question as any,
      questions: [],
      totalQuestion: 0,
      questionAnswered: jest.fn(),
      state: States.ERROR
    });

    wrapper = shallow(<Quiz {...props} />);
    wrapper
      .find(AppButton)
      .props()
      .onPress(undefined as any);
    expect(replace).toHaveBeenCalledWith('Home');
  });

  it('should render results', () => {
    jest.spyOn(Trivia, 'useTrivia').mockReturnValue({
      currentIndex: 1,
      currentQuestion: question as any,
      questions: [question as any],
      totalQuestion: 1,
      questionAnswered: jest.fn(),
      state: States.FETCHED
    });

    wrapper = shallow(<Quiz {...props} />);
    expect(wrapper.find(Results).props()).toBeTruthy();
  });

  it('should render trivia', () => {
    jest.spyOn(Trivia, 'useTrivia').mockReturnValue({
      currentIndex: 0,
      currentQuestion: question as any,
      questions: [question as any, question as any],
      totalQuestion: 2,
      questionAnswered: jest.fn(),
      state: States.FETCHED
    });

    wrapper = shallow(<Quiz {...props} />);
    expect(wrapper.find(QuestionCard).length).toBe(2);
    expect(wrapper.find(AnimatedCard).length).toBe(1);
  });
});
