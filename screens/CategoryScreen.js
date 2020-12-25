import React from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity, View } from 'react-native';

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

import Colors from '../constants/colors';


function CategoryScreen({ navigation }) {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      onSelect={() => {
        navigation.navigate('CategoryMeals',
          {
            categoryTitle: itemData.item.title,
            categoryId: itemData.item.id  })
  }} />
    // <TouchableOpacity style={styles.gridItem}
    //   onPress={() => {
    //   navigation.navigate('CategoryMeals',
    //      { categoryId: itemData.item.title } )
    // }}>
    //   <View>
    //     <Text>{ itemData.item.title}</Text>
    //   </View>
    // </TouchableOpacity>
    )
};
  return (
    <FlatList keyExtractor={(item, index) => item.id}
              data={CATEGORIES}
              renderItem={renderGridItem}
              numColumns={2} />
  );
}

CategoryScreen.navigationOption = {
  headerTitle: 'Meal Categories',
  headerStyle: {
    backgroundColor:Colors.primaryColor
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:"center"
  },
  // gridItem: {
  //   flex: 1,
  //   margin: 15,
  //   height:150,
  // }
});

export default CategoryScreen;