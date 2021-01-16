import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Home from './index';
import AppButton from '../../components/AppButton';

jest.mock('../../components/SampleCard', () => jest.fn());

describe('Home', () => {
  let wrapper: ShallowWrapper;
  const replace = jest.fn();

  const props = {
    navigation: { replace }
  } as any;

  beforeEach(() => {
    wrapper = shallow(<Home {...props} />);
  });

  it('should start quiz', () => {
    wrapper
      .find(AppButton)
      .props()
      .onPress(undefined as any);

    expect(replace).toHaveBeenCalledWith('Quiz');
  });
});
