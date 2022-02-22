import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Text,
} from 'react-native';
import colors from '../../utils/colors';

export default function Button({onPress, children}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingStart: 55,
    paddingEnd: 55,
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 10,
  },
  textStyle: {
    color: colors.white,
    fontSize: 24,
  }
});

Button.defaultProps = {
  children: null,
  onPress: () => {},
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
