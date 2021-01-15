import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Results from './index';
import { QuestionLabel, CurrentLabel } from './styles';

describe('Results', () => {
  let wrapper: ShallowWrapper;
  const question = { question: 'question', isCorrect: true } as any;
  const question1 = { question: 'question1', isCorrect: false } as any;

  const props = {
    questions: [question, question1],
    total: 2,
    onPlayAgain: jest.fn() as any
  };

  beforeEach(() => {
    wrapper = shallow(<Results {...props} />);
  });

  it('should render a component', () => {
    const { children: label } = wrapper.find(CurrentLabel).props();
    const { children: firstResult } = wrapper.find(QuestionLabel).at(0).props();
    const { children: secondResult } = wrapper
      .find(QuestionLabel)
      .at(1)
      .props();

    expect(label).toEqual('1 of 2');
    expect(firstResult).toEqual('+ question');
    expect(secondResult).toEqual('- question1');
  });
});
