import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default Notifications = props => {
  //   console.log(props.route.params?.data);
  //   const {data} = props.route.params;
  return (
    <View
      style={{
        flex: 1,
      }}>
     
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontSize: 30, textAlign: 'center'}}>
          {'Notification'}
        </Text>
      </View>
    </View>
  );
};
