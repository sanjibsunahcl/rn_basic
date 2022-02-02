import React from 'react';
import { Text, View } from 'react-native';

const Child = (props) => {
  return (
    <View>
      <Text>Hello, I am {props.name}!</Text>
    </View>
  );
}

const Parent = () => {
  return (
    <View>
      <Child name="Maru" />
      <Child name="Jellylorum" />
      <Child name="Spot" />
    </View>
  );
}

export default Parent;
