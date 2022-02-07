import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default Details = props => {
  console.log(props.route.params?.data);
  const {data} = props.route.params;
  return (
    <View
      style={{
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20}}>{data.releaseYear}</Text>
      <Text style={{fontSize: 20}}>{data.title}</Text>
    </View>
  );
};
