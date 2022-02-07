import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import axios from 'axios';

const Axios = () => {
  const getDataUsingSimpleGetCall = () => {
    console.log('call api');
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error.message);
      })
      .finally(function () {
        // always executed
        console.log('Finally called');
      });
  };

  const getDataUsingAsyncAwaitGetCall = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1',
      );
      console.log(JSON.stringify(response.data));
    } catch (error) {
      // handle error
      console.log(error.message);
    }
  };

  const postDataUsingSimplePostCall = () => {
    // const options = {
    //     url: url,
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json'
    //     },
    //     data: {
    //       user_name: this.state.userName,
    //     }
    //   };

    // await axios(options)
    //     .then(response => {

    //         console.log("Api call Method"+response.data.message);

    //     })
    //     .catch(error=>
    //       console.log(error)

    //       )
    //          .finally(() =>
    //         );

    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
      .then(function (response) {
        // handle success
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        console.log(error.message);
      });
  };

  const multipleRequestsInSingleCall = () => {
    axios
      .all([
        axios
          .get('https://jsonplaceholder.typicode.com/posts/1')
          .then(function (response) {
            // handle success
            console.log('Post 1 : ' + JSON.stringify(response.data));
          }),
        axios
          .get('https://jsonplaceholder.typicode.com/posts/2')
          .then(function (response) {
            // handle success
            console.log('Post 2 : ' + JSON.stringify(response.data));
          }),
      ])
      .then(
        axios.spread(function (acct, perms) {
          // Both requests are now complete
          console.log('Both requests are now complete');
        }),
      );
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, textAlign: 'center'}}>
        Example of Axios Networking in React Native
      </Text>
      {/*Running GET Request*/}
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getDataUsingSimpleGetCall}>
        <Text>Simple Get Call</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getDataUsingAsyncAwaitGetCall}>
        <Text>Get Data Using Async Await GET</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={postDataUsingSimplePostCall}>
        <Text>Post Data Using POST</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={multipleRequestsInSingleCall}>
        <Text>Multiple Concurrent Requests In Single Call</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
});

export default Axios;
