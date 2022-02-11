import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {ActionCreators} from '../../src/redux/actions';

class ReduxExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.props.getApiData().then(async () => {
      const {responseData, error} = this.props;
      this.setState({data: responseData.movies});
      // console.log('responseData fghfh' + JSON.stringify(responseData));
    });
  }

  render() {
    const {isLoading} = this.props;
    const {data} = this.state;
    console.log('main data' + JSON.stringify(data));
    return (
      <View style={{flex: 1, padding: 24, justifyContent: 'center'}}>
        {data.length === 0 ? (
          <ActivityIndicator size={'large'} style={{alignSelf: 'center'}} />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <Text style={{fontSize: 20}}>
                {item.title}, {item.releaseYear}
              </Text>
            )}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => {
  // console.log('responseData nnn' + JSON.stringify(state));
  return {
    responseData: state.demo.responseData,
    isloading: state.demo.isLoading,
  };
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxExample);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
