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
import {useMutation} from '@apollo/client';
import {INSERT_TODO} from '../graphQl/mutation/insertTodo';

export default Notifications = props => {
  //   console.log(props.route.params?.data);
  //   const {data} = props.route.params;
  const [text, setText] = useState('');
  const [insertTodo, {data = {}, loading, error}] = useMutation(INSERT_TODO);

  const submit = () => {
    setText('');
    insertTodo({
      // variables: {text, isPublic},
      variables: {text: text, isPublic: false},
    });
  };

  // console.log(text);
  console.log('mutationData v' + JSON.stringify(data));
  console.log('mutationError' + JSON.stringify(error));

  return (
    <View style={styles.mainContainer}>
      <Text style={{fontSize: 18, color: 'black'}}>GraphQL Mutation</Text>
      {loading ? (
        <ActivityIndicator
          size={'large'}
          style={{alignSelf: 'center'}}
          color={'black'}
        />
      ) : null}
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
});
