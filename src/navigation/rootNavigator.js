import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ListScreen from '../screens/list';
import DetailsScreen from '../screens/details';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="List"
        screenOptions={{
          gestureEnabled: true,
        }}>
        <Stack.Screen
          name="List"
          component={ListScreen}
          // options={{
          //   headerShown: false,
          // }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          // options={{
          //   headerShown: false,
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
