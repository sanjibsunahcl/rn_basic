import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../components';
import * as NavigationService from '../navigation/navigationService';
import Header from '../components/header/Header';
import { SafeAreaView } from 'react-native-safe-area-context';


export default List = props => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    setLoading(true);
    setData([]);
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
      console.log('Movies Data' + JSON.stringify(json.movies));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const renderMovieList = (item, index) => {
    return (
      <TouchableOpacity
        style={{
          marginTop: 10,
          borderColor: '#234',
          borderWidth: 1,
          padding: 10,
          borderRadius: 5,
        }}
        onPress={() => NavigationService.navigateTo('Details', {data: item})}>
        <Text style={{fontSize: 20}}>
          {item.title}, {item.releaseYear}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header text={'Listing'} isBackButtonVisible={false} />
      {isLoading ? (
        <ActivityIndicator size={'large'} style={{alignSelf: 'center'}} />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item, index}) => renderMovieList(item, index)}
        />
      )}
    </SafeAreaView>
  );
};
