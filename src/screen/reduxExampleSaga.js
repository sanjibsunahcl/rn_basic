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

  renderFooterItem = () => {
    return (
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => NavigationService.navigateTo('Details')}>
        <Text style={{color: 'white', fontSize: 18}}>GQL</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const {isLoading} = this.props;
    console.log('isLoading app ' + isLoading);
    const {data} = this.state;
    console.log('main data' + JSON.stringify(data));
    return (
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size={'large'} style={{alignSelf: 'center'}} />
        ) : (
          <FlatList
            data={data}
            style={{height: 100}}
            keyExtractor={({id}, index) => id}
            renderItem={({item, index}) => this.renderMovieList(item, index)}
            ListFooterComponent={this.renderFooterItem()}
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
    margin: 10,
  },
  btnStyle: {
    backgroundColor: 'black',
    width: 180,
    height: 70,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 50,
  },
});
