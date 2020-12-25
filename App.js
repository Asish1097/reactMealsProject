import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import { createStore , combineReducers } from 'redux';
import { Provider } from 'react-redux';

import MainTabScreen from './navigation/MealsNavigation';
import FavoritesScreen from './screens/FavoritesScreen';
import CategoryMealsScreen from './screens/CategoryMealsScreen';
import FilterScreen from './screens/FilterScreen';
import mealsReducer from './store/reducers/meals';

import colors from './constants/colors'

const Drawer = createDrawerNavigator();

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore (rootReducer);

export default function App() {
  return (
    <Provider store={store}>
     <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="home" component={MainTabScreen} />
        <Drawer.Screen name="filter" component={FilterScreen}  />
      </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
