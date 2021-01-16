import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render a component', () => {
    expect(wrapper).toBeTruthy();
  });
});
