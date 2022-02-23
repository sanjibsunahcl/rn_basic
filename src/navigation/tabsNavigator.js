import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/home';
import NotificationScreen from '../screens/notification';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Bottom = createBottomTabNavigator();

const BottomMenu = () => {
  return (
    <Bottom.Navigator>
      {/* <Bottom.Screen name="Auth" component={AuthStack} /> */}
      <Bottom.Screen
        name="Home"
        component={HomeScreen}
        // options={{headerShown: false}}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/1200px-Home-icon.svg.png',
              }}
              resizeMode="contain"
              style={{height: 20, width: 20}}
            />
          ),
        }}
      />
      <Bottom.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/633/633816.png',
              }}
              resizeMode="contain"
              style={{height: 20, width: 20}}
            />
          ),
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomMenu;
