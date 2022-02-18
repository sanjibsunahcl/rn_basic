import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Switch,
  SectionList,
  BackHandler,
  Alert,
} from 'react-native';
import AnimationExample from './animation';
import DrawerLayoutExample from './drawerLayoutAndroid';
import KeyboardAvoidingExample from './keyBoardAvoidingView';
import ModalExample from './modalExample';
import PermisionExample from './permissionAndroid';
import RefreshControlExample from './refreshControlApi';
import VirtualizedListExample from './virtualizedList';

const NativeComponentApis = props => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{'     ' + title}</Text>
    </View>
  );

  return (
    // <View style={styles.container}>
    //   <Switch
    //     trackColor={{false: '#767577', true: '#81b0ff'}}
    //     thumbColor={isEnabled ? '#234' : '#f4f3f4'}
    //     ios_backgroundColor="#3e3e3e"
    //     onValueChange={toggleSwitch}
    //     value={isEnabled}
    //   />
    //   <SectionList
    //     sections={DATA}
    //     keyExtractor={(item, index) => item + index}
    //     renderItem={({item}) => <Item title={item} />}
    //     renderSectionHeader={({section: {title}}) => (
    //       <Text style={styles.header}>{title + ':-'}</Text>
    //     )}
    //   />
    // </View>
    // <DrawerLayoutExample></DrawerLayoutExample>
    // <PermisionExample></PermisionExample>
    // <AnimationExample></AnimationExample>
    // <KeyboardAvoidingExample></KeyboardAvoidingExample>
    // <ModalExample></ModalExample>
    // <RefreshControlExample></RefreshControlExample>
    <VirtualizedListExample></VirtualizedListExample>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    // backgroundColor: '#f9c2ff',
    padding: 5,
    marginVertical: 5,
  },
  header: {
    fontSize: 18,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
  },
});

export default NativeComponentApis;
