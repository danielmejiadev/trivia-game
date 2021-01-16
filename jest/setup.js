/* eslint-disable no-undef */
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};

  return Reanimated;
});
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

global.fetch = require('jest-fetch-mock');
Enzyme.configure({ adapter: new Adapter() });
