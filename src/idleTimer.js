import React, {Component} from 'react';
import {
  Button,
  PanResponder,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

export default class IdleTimer extends Component {
  state = {
    show: false,
  };
  _panResponder = {};
  timer = 0;
  componentDidMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => {
        this.resetTimer();
        return true;
      },
      onMoveShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => {
        // this.resetTimer();
        return false;
      },
      onMoveShouldSetPanResponderCapture: () => false,
      onPanResponderTerminationRequest: () => true,
      onShouldBlockNativeResponder: () => false,
    });
    this.timer = setTimeout(() => {
      this.setState({show: true});
      console.log('idle state clear');
    }, 1000 * 120 );
  }

  resetTimer() {
    clearTimeout(this.timer);
    if (this.state.show) this.setState({show: false});
    this.timer = setTimeout(() => {
      this.setState({show: true});
      console.log('idle state clear');
    }, 1000 * 120);
  }

  render() {
    return (
      <View
        style={styles.container}
        // collapsable={false}
        {...this._panResponder.panHandlers}>
        {this.state.show ? (
          <Text style={{fontSize: 30}}>Idle State Timer Expired : 18sec</Text>
        ) : null}
        
        {/* <TouchableOpacity>
          <Image
            style={{width: 300, height: 300}}
            // source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          />
        </TouchableOpacity>

        <Button title="Click here to avoid idle" onPress={() => {}} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});
