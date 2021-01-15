import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import AppButton from './index';
import { Text } from './styles';

describe('App', () => {
  let wrapper: ShallowWrapper;
  const props = {
    onPress: jest.fn(),
    title: 'title'
  };

  beforeEach(() => {
    wrapper = shallow(<AppButton {...props} />);
  });

  it('should render a component', () => {
    expect(wrapper.find(Text).props()).toEqual({
      children: props.title
    });
  });
});
