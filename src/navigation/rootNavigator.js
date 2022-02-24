import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as NavigationService from '../navigation/navigationService';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomMenu from './tabsNavigator';
import ReduxExampleSaga from '../screen/reduxExampleSaga';


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
          component={ReduxExampleSaga}
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
