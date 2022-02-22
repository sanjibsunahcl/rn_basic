import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import colors from '../../utils/colors';

export default function Header({isBackButtonVisible, onPress, text}) {
  return (
    <View style={styles.container}>
      {isBackButtonVisible ? (
        <TouchableOpacity style={styles.backBtnContainer}>
          <Image
            source={{
              uri: 'https://icons.iconarchive.com/icons/icons8/ios7/512/Arrows-Back-icon.png',
            }}
            style={styles.backBtnStyle}
          />
        </TouchableOpacity>
      ) : null}
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 60,
    // justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backBtnContainer: {
    height: 20,
    width: 20,
    position: 'absolute',
    left: 10,
    // padding: 5
  },
  backBtnStyle: {
    height: 20,
    width: 20,
    tintColor: 'white',
    padding: 10,
  },
  textStyle: {
    color: colors.white,
    fontSize: 24,
    alignSelf: 'center',
  },
});
