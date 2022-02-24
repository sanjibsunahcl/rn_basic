import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import {ActionCreators} from '../../src/redux/actions';
import {ActionCreators} from '../../src/reduxSaga/actions';
import * as NavigationService from '../navigation/navigationService';

class ReduxExampleSaga extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.props.geApiDataAction();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.responseData !== this.props.responseData) {
      const {responseData} = this.props;
      this.setState({data: responseData.movies});
    }
  }

  renderMovieList = (item, index) => {
    return (
      <TouchableOpacity
        style={{
          marginTop: 10,
          borderColor: '#234',
          borderWidth: 1,
          padding: 10,
          borderRadius: 5,
        }}
        onPress={() => NavigationService.navigateTo('Details', {data: item})}>
        <Text style={{fontSize: 20}}>
          {item.title}, {item.releaseYear}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    const {isLoading} = this.props;
    console.log('isLoading app ' + isLoading);
    const {data} = this.state;
    console.log('main data' + JSON.stringify(data));
    return (
      <View style={{flex: 1, padding: 24, justifyContent: 'center'}}>
        {isLoading ? (
          <ActivityIndicator size={'large'} style={{alignSelf: 'center'}} />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item, index}) => this.renderMovieList(item, index)}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log('responseData nnn' + JSON.stringify(state));
  return {
    responseData: state.demo.responseData,
    isLoading: state.demo.isLoading,
  };
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxExampleSaga);

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
