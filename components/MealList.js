import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MealItem from '../components/MealItem';

function MealList(props) {
  const navigation = useNavigation();

    const renderMealsItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.image}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        afforadability={itemData.item.afforadability}
        onSelectMeal={() => {
          navigation.navigate('MealsDetails',
          {
            mealTitle:itemData.item.title,
            mealId: itemData.item.id  })
        }}
      />
    )
  }
    return (
        <View style={styles.list}>
            <FlatList
                data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealsItem}
                style={{ width: "100%" }}/>
        </View>
    );
}

const styles = StyleSheet.create({
     list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        padding:10
  }
});

export default MealList;