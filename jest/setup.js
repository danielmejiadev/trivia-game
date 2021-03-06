/* eslint-disable no-undef */
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'react-native-gesture-handler/jestSetup';
import * as styled from 'styled-components';

jest.spyOn(styled, 'useTheme').mockReturnValue({ colors: {} });
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};

  return Reanimated;
});
jest.mock('react-native-redash/lib/module/v1', () => {});

global.fetch = require('jest-fetch-mock');
Enzyme.configure({ adapter: new Adapter() });
