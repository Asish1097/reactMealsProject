import React,{useEffect,useCallback} from 'react';
import { ScrollView,StyleSheet, Text, Button, View } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { MEALS } from "../data/dummy-data";
import { toggleFavourite } from '../store/actions/Meals';

function MealDetailsScreen({ route, navigation }) {
  const avilableMeals = useSelector(state => state.meals.meals);

  const { mealId } = route.params;
  const selectedMeal = avilableMeals.find(meal => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavouriteHandler = useCallback(() => {
    dispatch(toggleFavourite(mealId));
  }, [dispatch,mealId]);

  useEffect(() => {
    navigation.setParams({ toggleFav: toggleFavouriteHandler });
  }, [toggleFavouriteHandler]);


  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>{ selectedMeal.title}</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:"center",
  }
});

export default MealDetailsScreen;