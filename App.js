/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import JapaPage from './src/JapaPage';
const Stack = createNativeStackNavigator();
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="japa"
        screenOptions={
          {
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'orange'}
          }
        }>
        <Stack.Screen
          name="japa"
          component={JapaPage}
          options={{
            title: "JapaShloka",
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30
            }
          }}
        />
        {/* <Stack.Screen
          name="Home_to_Details"
          component={DetailsScreen}
          options={ ( {route}) => ({title: route.params.movie.title})}
        />
        <Stack.Screen
          name="Details_to_Details"
          component={DetailsScreen}
          options={ ( {route}) => ({title: route.params.movie.title})}
        />
        <Stack.Screen
          name="BigImageView"
          component={ImageScreen}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
