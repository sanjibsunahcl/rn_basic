import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  const name = 'Sanjib';

  const getFullName = (firstName, lastname) => {
    return firstName + ' ' + lastname;
  };

  return (
    <View style={styles.container}>
      <Text> welcome {getFullName('Sanjib', 'Suna')} </Text>
      <View>
        <View style={styles.child} />
        <View style={styles.child} />
        <View style={styles.child} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#234',
    justifyContent: 'center',
    alignItems: 'center',
  },
  child: {
    backgroundColor: 'red',
  },
});

export default App;
