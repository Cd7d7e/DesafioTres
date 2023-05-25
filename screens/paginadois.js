import React from 'react';
import { View, Text, Button } from 'react-native';

const NextScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Toca aqui em baixo</Text>
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default NextScreen;
