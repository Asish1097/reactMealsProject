import React from 'react';
import { FlatList, View, Text, Button, StyleSheet } from 'react-native';
import { useSelector} from 'react-redux';

import MealList from '../components/MealList';
// import MealItem from '../components/MealItem';

import { CATEGORIES, MEALS } from "../data/dummy-data";

function CategoryMealsScreen({ route, navigation }) {

  // const renderMealsItem = (itemData) => {
  //   return (
  //     <MealItem
  //       title={itemData.item.title}
  //       image={itemData.item.image}
  //       duration={itemData.item.duration}
  //       complexity={itemData.item.complexity}
  //       afforadability={itemData.item.afforadability}
  //       onSelectMeal={() => {
  //         navigation.navigate('MealsDetails',
  //         {
  //           mealTitle:itemData.item.title,
  //           mealId: itemData.item.id  })
  //        }} />
  //     // <View>
  //     //   <Text>{ itemData.item.title}</Text>
  //     // </View>
  //   )
  // }

  const { categoryId } = route.params;
  const selectedCategory = CATEGORIES.find(category => category.id === categoryId);

  const avilableMeals = useSelector(state => state.meals.filteredMeals);

  const displayMeals = avilableMeals.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0); 


  return (
    <MealList listData={displayMeals} />
    // <View style={styles.container}>
    //   <FlatList data={displayMeals}
    //     keyExtractor={(item, index) => item.id}
    //     renderItem={renderMealsItem}
    //     style={{width:"100%"}}/>
    //   {/* <Text>Category Meals Screen</Text>
    //   <Text>{ selectedCategory.title}</Text>
    //   <Button
    //     title="Meal Details"
    //     onPress={() => navigation.navigate('MealsDetails')}
    //   />
    //   <Button title="Go back" onPress={() => navigation.goBack()} /> */}
    // </View>
  );
};


const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    padding:10
  }
});

export default CategoryMealsScreen;