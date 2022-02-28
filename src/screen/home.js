import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {gql, useQuery, useLazyQuery} from '@apollo/client';
import {FETCH_TODOS} from '../graphQl/queries/todoQuery';

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
  // const {data = {}, loading, error} = useQuery(CHAPTERS_QUERY);
  // console.log(JSON.stringify(data.chapters) + 'gql data');

  // const {data = {}, error, loading} = useQuery(FETCH_TODOS);

  const [responseData, setResponseData] = useState(null);

  const {
    data = {},
    error,
    loading,
    refetch,
  } = useQuery(FETCH_TODOS, {
    variables: {isPublic: false},
    //back pressed data update
    options: {
      fetchPolicy: 'cache-first',
      errorPolicy: 'ignore',
    },
  });

  // console.log(JSON.stringify(data) + 'gql Hasura data');

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      //focus listener again performed query
      if (refetch) {
        refetch();
      }
    });
    return unsubscribe;
  }, [props.navigation, refetch]);

  useEffect(() => {
    if (data) {
      setResponseData(data.todos);
    }
  }, [data]);

  console.log('state Response data' + JSON.stringify(responseData));
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

  const TodoItem = ({item, isPublic}) => {
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
        onPress={() => alert(JSON.stringify(item))}>
        {/* <Text
          style={{fontSize: 18, color: 'black', textTransform: 'capitalize'}}>
          {`User Name:- ${item.user.name}`}
        </Text> */}
        <Text
          style={{fontSize: 18, color: 'black', textTransform: 'capitalize'}}>
          {`Todo title:- ${item.title}`}
        </Text>
        <Text style={{fontSize: 18, color: 'black'}}>
          {`Date:- ${new Date(item.created_at).toString().slice(0, 15)}`}
        </Text>
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
          <ActivityIndicator
            size={'large'}
            style={{alignSelf: 'center'}}
            color={'black'}
          />
        ) : (
          <FlatList
            data={data.todos}
            renderItem={({item}) => <TodoItem item={item} />}
            keyExtractor={item => item.id.toString()}
          />
        )}
      </View>
    </View>
  );
};
