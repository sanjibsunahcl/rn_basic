import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ListScreen from '../screens/list';
import DetailsScreen from '../screens/details';
import * as NavigationService from '../navigation/navigationService';
import HomeScreen from '../screens/home';
import NotificationScreen from '../screens/notification';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomMenu from './tabsNavigator';


const Stack = createStackNavigator();

// const Drawer = createDrawerNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer
      ref={navigatorRef => {
        NavigationService.setNavigator(navigatorRef);
      }}>
      <Stack.Navigator
        initialRouteName="List"
        screenOptions={{
          gestureEnabled: true,
        }}>
        <Stack.Screen
          name="List"
          component={ListScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Details"
          component={BottomMenu}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
