import React from 'react';
import { ButtonProps } from 'react-native';

import { Container, Text } from './styles';

function AppButton({ onPress, title }: ButtonProps) {
  return (
    <Container onPress={onPress}>
      <Text>{title}</Text>
    </Container>
  );
}

export default AppButton;
