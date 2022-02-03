import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
} from 'react-native';

const Child = props => {
  const [color, setColor] = useState(true);

  //mounting
  useEffect(() => {
    console.log('mounting example!');
  }, []);

  //unmount
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      onClickBackHandler,
    );
    props.navigation.addListener('gestureStart', onClickBackHandler);
    return () => {
      backHandler.remove();
      props.navigation.removeListener('gestureStart', onClickBackHandler);
    };
  }, []);

  //updating
  useEffect(() => {
    console.log('updating');
    //dependencies data
  }, [props.data]);

  const onClickBackHandler = () => {
    console.log('perform back');
  };

  const updateState = () => {
    setColor(!color);
  };

  return (
    <View style={styles.container}>
      <Text>{color ? `Hello, I am ${props.name}!` : ''}</Text>
      <TouchableOpacity
        style={[styles.buttonStyle, {backgroundColor: color ? 'red' : 'black'}]}
        onPress={updateState}>
        <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
          Click Here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Parent = () => {
  return (
    <View style={{flex: 1}}>
      <Child name="Sanjib" />
      {/* <Child name="Jellylorum" />
      <Child name="Spot" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    height: 60,
    width: 200,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    // resizeMode: 'stretch',
  },
});

export default Parent;
