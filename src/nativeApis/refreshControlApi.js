import React, {useEffect, useState, useCallback} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
  RefreshControl,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default RefreshControlExample = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getMovies();
  }, []);

  const getMovies = async () => {
    setRefreshing(false);
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
        onPress={() => alert(item.title + ' ' + item.releaseYear)}>
        <Text style={{fontSize: 20}}>
          {item.title}, {item.releaseYear}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, padding: 24, justifyContent: 'center'}}>
      <StatusBar animated={true} backgroundColor="#234" />

      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {isLoading ? (
          <ActivityIndicator size={'large'} style={{alignSelf: 'center'}} />
        ) : (
          <View style={{flex: 1}}>
            {data.map((item, index) => renderMovieList(item, index))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    // backgroundColor: 'pink',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
