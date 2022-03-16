import React, {useState, useEffect} from 'react';
import {Text, View, Button} from 'react-native';

export const dataChange = x => x * 10;

const ItemsEnzyme = () => {
  const [status, setStatus] = useState('');

  return (
    <View
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      testID="todo-item">
      <Text>Sanjib</Text>
      <Text style={{fontSize: 18, color: 'black'}}>Items</Text>
      <Button testID="myButton" title="Click"></Button>
    </View>
  );
};

export default ItemsEnzyme;
