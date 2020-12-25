import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MealList from '../components/MealList';
import { MEALS } from "../data/dummy-data";
import { useSelector } from 'react-redux';


function FavoritesScreen(props) {
  const favMeals = useSelector(state => state.meals.favouriteMeals);

  
  return (
    <MealList listData={favMeals }/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  }
});

export default FavoritesScreen;