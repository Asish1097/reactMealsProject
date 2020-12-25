import React,{useState} from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import Colors from '../constants/colors';

function FilterSwitch(props) {
  return (
    <View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch
          trackColor={{ true: Colors.primaryColor }}
          thumbColor={Colors.primaryColor}
          value={props.state}
          onValueChange={props.onChange}
        />
      </View>
  )
}

function FilterScreen(props) {
  const [isGultenFree, setIsGultenFree] = useState(false);
  const [isLoctoseFree, setIsLoctoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian,setIsVegetarian] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Avilable filter</Text>
      <FilterSwitch label="Gulten-free"
        state={isGultenFree} 
        onChange={newValue => setIsGultenFree(newValue)}
      />
      <FilterSwitch label="lactose-free"
        state={isLoctoseFree} 
        onChange={newValue => setIsLoctoseFree(newValue)}
      />
      <FilterSwitch label="vegan"
        state={isVegan} 
        onChange={newValue => setIsVegan(newValue)}
      />
      <FilterSwitch label="vegetarian"
        state={isVegetarian} 
        onChange={newValue => setIsVegetarian(newValue)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    alignItems:'center'
  },
  title:{
    fontWeight: 'bold',
    fontSize: 20,
    margin: 20,
    textAlign:'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical:10,
  },
});

export default FilterScreen;