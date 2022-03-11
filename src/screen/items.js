import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Items extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Sanjib</Text>
        <Text style={{fontSize: 18, color: 'black'}}>Items</Text>
      </View>
    );
  }
}

export default Items;
