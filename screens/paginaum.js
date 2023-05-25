import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nao clique aqui em baixo</Text>
      <Button
        title="Próxima Página"
        onPress={() => navigation.navigate('Next')}
      />
    </View>
  );
};

export default HomeScreen;
