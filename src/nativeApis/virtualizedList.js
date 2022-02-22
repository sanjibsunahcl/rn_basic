import React from 'react';
import {
  SafeAreaView,
  View,
  VirtualizedList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import Button from '../components/button/Button';
import Header from '../components/header/Header';

const DATA = [];

const getItem = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index + 1}`,
});

const getItemCount = data => 50;

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const VirtualizedListExample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#234" />
      <Header text={'Virtual List'} isBackButtonVisible={true} />
      
      {/* <Button style={{marginBottom: 20, marginVertical: 20}}>
        <Text>😀 😎 👍 💯</Text>
      </Button> */}
      <VirtualizedList
        data={DATA}
        initialNumToRender={15}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: '#234',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 32,
    color:'white',
  },
});

export default VirtualizedListExample;
