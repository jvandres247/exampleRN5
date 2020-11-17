import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, Text, View} from 'react-native';
import Home from '../screens/Home';
import Contact from '../screens/Contact';
import About from '../screens/About';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
return(
  <Tab.Navigator>
    <Tab.Screen name="home" component={Home} options={{title: "home"}}/>
    <Tab.Screen name="contact" component={Contact} options={{title: "contact"}}/>
    <Tab.Screen name="about" component={About} options={{title: "about"}}/>
  </Tab.Navigator>
)
  /* return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} options={{title: 'Home'}} />
      <Stack.Screen name="about" component={About} options={{title: 'About'}} />
      <Stack.Screen
        name="contact"
        component={Contact}
        options={{title: 'Contact'}}
      />
    </Stack.Navigator>
  ); */
}

const styles = StyleSheet.create({});
