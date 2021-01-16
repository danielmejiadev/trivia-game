import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  border-radius: 10px;
  padding: 12px 20px;
  background-color: ${({ theme: { colors } }) => colors.primary};
`;

export const Text = styled.Text`
  font-size: 18px;
  color: white;
  align-self: center;
  text-transform: uppercase;
`;
