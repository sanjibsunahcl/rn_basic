import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

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
        onPress={() => props.navigation.navigate('Details', {data: item})}>
        <Text style={{fontSize: 20}}>
          {item.title}, {item.releaseYear}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, padding: 24, justifyContent: 'center'}}>
      {isLoading ? (
        <ActivityIndicator size={'large'} style={{alignSelf: 'center'}} />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item, index}) => renderMovieList(item, index)}
        />
      )}
    </View>
  );
};
