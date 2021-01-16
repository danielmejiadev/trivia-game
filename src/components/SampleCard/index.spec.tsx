import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import SampleCard from './index';

describe('SampleCard', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<SampleCard />);
  });

  it('should render a component', () => {
    expect(wrapper).toBeTruthy();
  });
});
