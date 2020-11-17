import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, Text, View} from 'react-native';
import Contact from '../screens/Contact';
import About from '../screens/About';

import HomeStack from './HomeStack';
import ContactStack from './ContactStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Navigation() {
return(
  <Tab.Navigator>
    <Tab.Screen name="home" component={HomeStack} options={{title: "home"}}/>
    <Tab.Screen name="contact" component={ContactStack} options={{title: "contact"}}/>
  </Tab.Navigator>
)
}

const styles = StyleSheet.create({});
