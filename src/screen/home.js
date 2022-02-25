import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {gql, useQuery} from '@apollo/client';

const CHAPTERS_QUERY = gql`
  query {
    chapters {
      id
      number
      title
    }
  }
`;

export default Home = props => {
  const {data = {}, loading, error} = useQuery(CHAPTERS_QUERY);
  console.log(JSON.stringify(data.chapters) + 'gql data');

  const ChapterItem = ({chapter}) => {
    const {number, title} = chapter;
    let header, subheader;
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          marginTop: 10,
          borderColor: 'black',
          borderWidth: 1,
          padding: 15,
          marginStart: 10,
          marginEnd: 10,
          borderRadius: 5,
        }}
        onPress={() => alert(JSON.stringify(chapter))}>
        <Text style={{fontSize: 18, color: 'black'}}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        {loading ? (
          <ActivityIndicator size={'large'} style={{alignSelf: 'center'}} />
        ) : (
          <FlatList
            data={data.chapters}
            renderItem={({item}) => <ChapterItem chapter={item} />}
            keyExtractor={chapter => chapter.id.toString()}
          />
        )}
      </View>
    </View>
  );
};
