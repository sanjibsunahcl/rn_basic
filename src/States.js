
import React, { Component } from 'react'
import { Text, View } from 'react-native'

class State extends Component {
   state = {
      text: 'Click here'
   }
   updateState = () => {
      this.setState({ text: 'The state is updated' });
   }

   render() {
      return (
         <View>
            <Text onPress = {this.updateState}>
               {this.state.myState}
            </Text>
         </View>
      );
   }
}
export default State;
