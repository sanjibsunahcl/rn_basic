import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default Fetch = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    //GET request
    await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'GET',
      //Request Type
    })
      .then(response => response.json())
      //If response is in json then in success
      .then(responseJson => {
        //Success
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch(error => {
        //Error
        alert(JSON.stringify(error));
        console.error(error);
      });
  };

  const getMovies = async () => {
    setLoading(true);
    setData([]);
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{flex: 1, padding: 24, justifyContent: 'center'}}>
      {isLoading ? (
        <ActivityIndicator size={'large'} style={{alignSelf: 'center'}} />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <Text style={{fontSize: 20}}>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          height: 60,
          width: 160,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}
        onPress={() => getMovies()}>
        <Text style={{color: 'white'}}>Click</Text>
      </TouchableOpacity>
    </View>
  );
};
