import React, {useState, useEffect} from 'react';
import {Text, View, Button} from 'react-native';

const Items = () => {
  const [status, setStatus] = useState('');
  const [timeoutStatus, settimeoutStatus] = useState('');

  useEffect(() => {
    setTimeout(() => {
      settimeoutStatus('timeout is called');
    }, 1000);
    console.log('effect is called');
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Sanjib</Text>
      <Text style={{fontSize: 18, color: 'black'}}>Items</Text>
      <Text testID="timeOutText">{timeoutStatus}</Text>
      <Text testID="myText">{status}</Text>
      <Button
        testID="myButton"
        onPress={() => setStatus('button pressed')}
        title="Click"></Button>
    </View>
  );
};

export default Items;
