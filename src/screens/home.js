import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/header/Header';

export default Home = props => {
  //   console.log(props.route.params?.data);
  //   const {data} = props.route.params;
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Header
        text={'Home'}
        isBackButtonVisible={true}
        onBackPress={() => props.navigation.goBack()}
      />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontSize: 30, textAlign: 'center'}}>{'Home'}</Text>
      </View>
    </View>
  );
};
