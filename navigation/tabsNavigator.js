import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screen/home';
import NotificationScreen from '../screen/notification';
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
                uri: 'https://th.bing.com/th/id/R.301d06729663c984b2b2cb337ab2aa58?rik=ci0qUnm2Bp2p%2bg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fdownload_333887.png&ehk=lSN3uUSbPplzPEZpKLmPjRrQSi6KlYehIBCitrSzR1I%3d&risl=&pid=ImgRaw&r=0',
              }}
              resizeMode="contain"
              style={{height: 20, width: 20, tintColor: 'black'}}
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
                uri: 'https://th.bing.com/th/id/R.699fe396375117eaee23130962eb7f6c?rik=piQ9RQMoUHM0Fg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_489991.png&ehk=g%2bS3oMP7HgFcs2CzR3fp7d6hp5cajsew7XaYlrvXEmU%3d&risl=&pid=ImgRaw&r=0',
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
