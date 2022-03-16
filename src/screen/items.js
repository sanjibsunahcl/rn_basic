import React, {useState, useEffect} from 'react';
import {Text, View, Button} from 'react-native';


const Items = () => {
  const [status, setStatus] = useState('');
  const [timeoutStatus, settimeoutStatus] = useState('');
  const [count, setCount] = useState(4);

  useEffect(() => {
    setTimeout(() => {
      settimeoutStatus('timeout is called');
    }, 1000);
  }, []);

  const btnClick = () => {
    setStatus('button pressed');
    console.log('btn Pressed');
  };
  
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Sanjib</Text>
      <Text style={{fontSize: 18, color: 'black'}}>Items</Text>
      <Text testID="timeOutText">{timeoutStatus}</Text>
      <Text testID="myText">{status}</Text>
      <Button testID="myButton" onPress={btnClick} title="Click"></Button>
    </View>
  );
};

export default Items;
