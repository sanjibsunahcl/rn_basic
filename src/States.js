import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: false,
    };
    alert('constructor');
  }

  componentDidMount(){
     console.log('click first time');  //
   // alert('click');
  }

  componentDidUpdate(prevProps) {
   // Typical usage (don't forget to compare props):
   console.log('component did update');
 }
 

  updateState = () => {
    this.setState({color: !this.state.color});
  };

  render() {
    const {color} = this.state;
    return (
      <View style={styles.container}>
        {/* <Text onPress={this.updateState}>{this.state.text}</Text> */}
        <Image
          style={styles.imageStyle}
          source={{
            uri: color
              ? 'https://static.toiimg.com/thumb/msid-58475411,width-748,height-499,resizemode=4,imgsize-142947/.jpg'
              : null,
          }}
        />
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            {backgroundColor: color ? 'red' : 'black'},
          ]}
          onPress={this.updateState}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
            Click Here
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    height: 60,
    width: 200,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    // resizeMode: 'stretch',
  },
});

export default State;
