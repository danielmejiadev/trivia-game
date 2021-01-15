import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import QuestionCard from './index';
import { Title, Question, CurrentLabel } from './styles';

describe('QuestionCard', () => {
  let wrapper: ShallowWrapper;
  const props = {
    title: 'title',
    question: 'question',
    current: 1,
    total: 1
  };

  beforeEach(() => {
    wrapper = shallow(<QuestionCard {...props} />);
  });

  it('should render a component', () => {
    expect(wrapper.find(Title).props().children).toEqual(props.title);
    expect(wrapper.find(Question).props().children).toEqual(props.question);
    expect(wrapper.find(CurrentLabel).props().children).toEqual('1 of 1');
  });
});
