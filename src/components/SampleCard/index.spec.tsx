import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import SampleCard from './index';

import * as hooks from '../../hooks/useAnimated';

jest.mock('../../hooks/useAnimated', () => ({ useAnimated: jest.fn() }));

describe('SampleCard', () => {
  let wrapper: ShallowWrapper;

  it('should render a component', () => {
    jest
      .spyOn(hooks, 'useAnimated')
      .mockReturnValue({ translateX: 1, translateY: 1, gestureHandler: {} });
    wrapper = shallow(<SampleCard />);
    expect(wrapper).toBeTruthy();
  });
});
