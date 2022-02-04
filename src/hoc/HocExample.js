import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import Hoc from './Hoc';

const HocExample = props => {
  const {counter, setCounter} = props;
  return (
    <View style={styles.container}>
      <Text>HOC</Text>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={[styles.buttonStyle]}
          onPress={() => setCounter(counter + 1)}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }}>
            +
          </Text>
        </TouchableOpacity>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
          {counter}
        </Text>
        <TouchableOpacity
          style={[styles.buttonStyle]}
          onPress={() => (counter != 0 ? setCounter(counter - 1) : null)}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
            -
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#234',
    marginStart: 10,
    marginEnd: 10,
  },
});

// HocExample.Hoc(HocExample);
export default Hoc(HocExample);
