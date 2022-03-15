import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {}

  dataChange = x => {
    this.setState({count: x * 5});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Count</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
