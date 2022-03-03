import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import {useMutation, useSubscription} from '@apollo/client';
import {INSERT_TODO} from '../graphQl/mutation/insertTodo';
import {FETCH_TODOS} from '../graphQl/queries/todoQuery';
import {SUBSCRIBE_TO_ONLINE_USERS} from '../graphQl/subscription/todoSubscription';

export default Notifications = props => {
  //   console.log(props.route.params?.data);
  //   const {data} = props.route.params;
  const [text, setText] = useState('');
  const [insertTodos, {data = {}, loading, error}] = useMutation(INSERT_TODO, {
    //perform refetch immediately after performing mutation
    refetchQueries: [FETCH_TODOS],
  });

  const submit = () => {
    setText('');
    insertTodos({
      // variables: {text, isPublic},
      variables: {text: text, isPublic: false},
    });
  };

  // console.log(text);
  console.log('mutationData v' + JSON.stringify(data));
  console.log('mutationError' + JSON.stringify(error));

  const {
    data: subsCriptionData = {},
    error: subsCriptionError,
    loading: subsCriptionLoading,
  } = useSubscription(SUBSCRIBE_TO_ONLINE_USERS);

  console.log('SubscriptionData' + JSON.stringify(subsCriptionData));
  // console.log('SubscriptionDataError' + JSON.stringify(subsCriptionError));

  const ItemList = ({item}) => {
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
            {`User name:- ${item.user.name}`}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={{fontSize: 18, color: 'black', marginTop: 10}}>
        GraphQL Subscription
      </Text>
      {loading || subsCriptionLoading ? (
        <ActivityIndicator
          size={'large'}
          style={{alignSelf: 'center'}}
          color={'black'}
        />
      ) : (
        <View style={{height: 200}}>
          <FlatList
            data={subsCriptionData.online_users}
            renderItem={({item}) => <ItemList item={item} />}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      )}
      <Text style={{fontSize: 18, color: 'black', marginTop: 10}}>
        GraphQL Mutation
      </Text>
      <View style={styles.textboxContainer}>
        <TextInput
          style={styles.textbox}
          editable={true}
          placeholder="Enter Todo's title"
          onChangeText={setText}
          value={text}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={submit}
        disabled={text === ''}>
        <Text style={styles.buttonText}> Add </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbox: {
    // flex: 1,
    padding: 10,
  },
  textboxContainer: {
    borderWidth: 1,
    paddingRight: 10,
    borderColor: 'black',
    borderRadius: 5,
    margin: 10,
    width: '70%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#39235A',
    borderColor: '#d6d7da',
    borderRadius: 5,
    width: 100,
    height: 50,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
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
});
