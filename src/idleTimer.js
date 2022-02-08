import React, {Component} from 'react';
import {
  Button,
  PanResponder,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  AppState,
} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';

export default class IdleTimer extends Component {
  state = {
    show: false,
    appState: AppState.currentState,
  };
  _panResponder = {};
  timer = 0;
  componentDidMount() {
    this.appStateSubscription = AppState.addEventListener(
      'change',
      nextAppState => {
        if (
          this.state.appState.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          console.log('App has come to the foreground state!');
        } else {
          console.log('Goes to background state', nextAppState);
          BackgroundTimer.setTimeout(() => {
            console.log('after 15 sec on background');
          }, 15000);
        }
        this.setState({appState: nextAppState});
      },
    );

    // this._panResponder = PanResponder.create({
    //   onStartShouldSetPanResponder: () => {
    //     this.resetTimer();
    //     return true;
    //   },
    //   onMoveShouldSetPanResponder: () => true,
    //   onStartShouldSetPanResponderCapture: () => {
    //     // this.resetTimer();
    //     return false;
    //   },
    //   onMoveShouldSetPanResponderCapture: () => false,
    //   onPanResponderTerminationRequest: () => true,
    //   onShouldBlockNativeResponder: () => false,
    // });
    // this.timer = setTimeout(() => {
    //   this.setState({show: true});
    //   console.log('idle state clear');
    // }, 1000 * 2);
  }

  resetTimer() {
    clearTimeout(this.timer);
    if (this.state.show) this.setState({show: false});
    this.timer = setTimeout(() => {
      this.setState({show: true});
      console.log('idle state clear');
    }, 1000 * 2);
  }

  componentWillUnmount() {
    this.appStateSubscription.remove();
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
