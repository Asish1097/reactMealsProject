import * as React from 'react';
import { Button, View, Text, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from "react-native-vector-icons/Ionicons";

import { CATEGORIES } from "../data/dummy-data";

import CategoryScreen from '../screens/CategoryScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDeatailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import filterScreen from '../screens/FilterScreen';
import colors from '../constants/colors';
import FilterScreen from '../screens/FilterScreen';


const HomeStack = createStackNavigator();
const FavStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();


function MainTabScreen() {
    return (
      <Tab.Navigator
      initialRouteName="Meals"
        activeColor="white"  
        // barStyle={{backgroundColor:colors.primaryColor}}
    >
      <Tab.Screen
        name="Meals"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Meals',
          tabBarColor:'red',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavStackScreen}
        options={{
          tabBarLabel: 'Favourites',
          tabBarColor:'colors.primaryColor',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-star" color={color} size={26} />
          ),
        }}
      />   
    </Tab.Navigator>  
    );
}

export default MainTabScreen;

function HomeStackScreen({navigation}) {
  return (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: colors.primaryColor,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    }}
      >
      <HomeStack.Screen name="Home" component={CategoryScreen}
        options={{
          title: 'Meals Categories',
          headerLeft: () => (<Icon.Button name='ios-menu' size={25} backgroundColor='blue' onPress={() => { navigation.openDrawer() }}></Icon.Button>)
        }}  />
      <HomeStack.Screen name="CategoryMeals" component={CategoryMealsScreen}
        options={({ route }) => ({
          title: route.params.categoryTitle,
          headerLeft: () => (<Icon.Button name='ios-menu' size={25} backgroundColor='blue' onPress={() => { navigation.openDrawer() }}></Icon.Button>)
        })}
      />
      <HomeStack.Screen name="MealsDetails" component={MealDeatailsScreen}
        options={({ route }) => ({
          title: route.params.mealTitle,
          headerRight: () => (<Icon name='ios-star' size={23} color="white" style={{ paddingRight: 20 }} onPress={route.params.toggleFav}></Icon>),
          headerLeft: () => (<Icon.Button name='ios-menu' size={25} backgroundColor='blue' onPress={() => { navigation.openDrawer() }}></Icon.Button>)
        })
      }
      />
     
    </HomeStack.Navigator>
  );
}

function FavStackScreen({navigation}) {
  return (
    <FavStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor:colors.primaryColor,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <FavStack.Screen name="Favourite" component={FavoritesScreen}
      options={{
          headerLeft: () => (<Icon name='ios-menu' size={25} backgroundColor='blue' onPress={() => { navigation.openDrawer() }}></Icon>)
        }}/>
           
    </FavStack.Navigator>
  );
}








