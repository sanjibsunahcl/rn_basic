import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

import {gql, useQuery, useMutation} from '@apollo/client';
import {FETCH_TODOS} from '../graphQl/queries/todoQuery';
import {REMOVE_TODO} from '../graphQl/mutation/deleteTodo';

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
  const [removeId, setRemoveId] = useState(null);

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

  console.log(JSON.stringify(error) + 'gql Hasura data error');

  const [
    deleteTodo,
    {data: deleteData, loading: deleting, error: deleteError},
  ] = useMutation(REMOVE_TODO,{
    refetchQueries: [FETCH_TODOS],
  });

  // useEffect(() => {
  //   const unsubscribe = props.navigation.addListener('focus', () => {
  //     //focus listener again performed query
  //     if (refetch) {
  //       refetch();
  //     }
  //   });
  //   return unsubscribe;
  // }, [props.navigation, refetch]);


  // useEffect(() => {
  //   if (data) {
  //     setResponseData(data.todos);
  //   }
  // }, [data]);

  // console.log('state Response data' + JSON.stringify(responseData));
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

  const removeTodoData = item => {
    setRemoveId(item.id);
    deleteTodo({
      variables: {id: item.id},
    });
    console.log('removeData' + JSON.stringify(deleteData));
  };

  // useEffect(() => {
  //   if (deleteData) {
  //     let filteredArray = responseData.filter(item => item.id !== removeId);
  //     console.log('filteredarray' + JSON.stringify(filteredArray));
  //     setResponseData(filteredArray);
  //   }
  // }, [deleteData]);

  const TodoItem = ({item, isPublic}) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => alert(JSON.stringify(item))}>
        {/* <Text
          style={{fontSize: 18, color: 'black', textTransform: 'capitalize'}}>
          {`User Name:- ${item.user.name}`}
        </Text> */}
        <View>
          <Text
            style={{fontSize: 18, color: 'black', textTransform: 'capitalize'}}>
            {`Todo title:- ${item.title}`}
          </Text>
          <Text style={{fontSize: 18, color: 'black'}}>
            {`Date:- ${new Date(item.created_at).toString().slice(0, 15)}`}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.removeBtn}
          onPress={() => removeTodoData(item)}>
          <Text style={{color: 'white'}}>Remove</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        {loading  ? (
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

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'white',
    marginTop: 10,
    borderColor: 'black',
    borderWidth: 1,
    padding: 15,
    marginStart: 10,
    marginEnd: 10,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  removeBtn: {
    position: 'absolute',
    right: 10,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
});
