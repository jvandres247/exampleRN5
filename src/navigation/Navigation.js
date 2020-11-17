import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, Text, View} from 'react-native';
import Home from '../screens/Home';
import Contact from '../screens/Contact';
import HomeStack from '../navigation/HomeStack';
import ContactStack from '../navigation/ContactStack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
return(
  <Drawer.Navigator>
    <Drawer.Screen name="home" component={HomeStack} options={{title: "home"}}/>
    <Drawer.Screen name="contact" component={ContactStack} options={{title: "contact"}}/>
  </Drawer.Navigator>
)
}

const styles = StyleSheet.create({});
