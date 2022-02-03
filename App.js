import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Parent from './src/components';
import IdleTimer from './src/idleTimer';
import State from './src/States';

const App = () => {
  const name = 'Sanjib';

  const getFullName = (firstName, lastname) => {
    return firstName + ' ' + lastname;
  };

  return (
    // <View style={styles.container}>
    //   <Text style={{color: 'black', fontSize: 20}}>
    //     {' '}
    //     Welcome {getFullName('Sanjib', 'Suna')}{' '}
    //   </Text>
    //   <View style={styles.subContainer}>
    //     <TouchableOpacity style={[styles.child, {backgroundColor: 'red'}]} />
    //     <TouchableOpacity style={[styles.child, {backgroundColor: 'orange'}]} />
    //     <TouchableOpacity style={[styles.child, {backgroundColor: 'green'}]} />
    //   </View>
    //   <View
    //     style={{
    //       height: 200,
    //       width: 200,
    //       borderRadius: 100,
    //       alignItems: 'center',
    //     }}>
    //     <Image
    //       style={styles.imageStyle}
    //       source={{
    //         uri: 'https://static.toiimg.com/thumb/msid-58475411,width-748,height-499,resizemode=4,imgsize-142947/.jpg',
    //       }}
    //     />
    //   </View>
    // </View>
    <>
    {/* <Parent></Parent> */}
    {/* <State></State> */}
    <IdleTimer></IdleTimer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  child: {
    backgroundColor: 'red',
    height: 60,
    width: 100,
    borderRadius: 10,
    margin: 5,
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    // resizeMode: 'stretch',
  },
});

export default App;
