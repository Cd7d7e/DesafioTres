import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';
import HomeScreen from './screens/paginaum';
import NextScreen from './screens/paginadois';

const Stack = createStackNavigator();

const App = () => {
  const horizontalTransition = {
    gestureDirection: 'horizontal',
    transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    },
    cardStyleInterpolator: ({ current, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
          backgroundColor: 'ligthcyan',
        },
      };
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'cyan',
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontWeight: 'Arial',
          },
          headerStyleInterpolator: HeaderStyleInterpolators.forFade,
          ...horizontalTransition,
        }}
      >
        <Stack.Screen
          name="Tela Inicial"
          component={HomeScreen}
          options={{
            title: 'clica N Man',
          }}
        />
        <Stack.Screen
          name="Next"
          component={NextScreen}
          options={{
            title: 'Pra que clico?',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
