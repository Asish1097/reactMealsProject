import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Platform, TouchableNativeFeedback } from 'react-native';

function CategoryGridTile(props) {
  let TouchableCmp = TouchableOpacity;
  if(Platform.OS == "android" && Platform.Version >= 21){
    TouchableCmp = TouchableNativeFeedback;
  } 
  return (
      <View style={styles.gridItem}>
        <TouchableCmp style={{flex:1}} onPress={props.onSelect}>
     {/* onPress  navigation.navigate('CategoryMeals',
         { categoryId: itemData.item.title } ) */}
    
      <View style={{...styles.container,...{backgroundColor:props.color}}}>
        {/* <Text>{itemData.item.title}</Text> */}
        <Text style={styles.Title}>{ props.title}</Text>
      </View>
      </TouchableCmp>
      </View>
    )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    padding: 10,
    justifyContent: 'flex-end',
    alignItems:'flex-end'
  },
  Title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign:'right',
  }
});

export default CategoryGridTile;