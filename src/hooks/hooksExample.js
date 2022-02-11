import React, {useEffect, useState, useCallback, useMemo, useRef} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';

export default HooksExample = props => {
  const [color, setColor] = useState(true);
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(12);

  const inputEl2 = useRef(null);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      console.log(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleClick = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  const factorial = useMemo(() => number + 1, [number]);

  const updateState = () => {
    // setColor(!color);
    //usecall back
    inputEl2.current.focus();
    handleClick();
    
  };

  return (
    <View style={styles.container}>
      <TextInput
        name="first_name"
        placeholder="First name"
        sty={{width:200}}
        ref={inputEl2}
        // onSubmitEditing={() => inputEl2.current.focus()}
      />
      <TouchableOpacity
        style={[styles.buttonStyle, {backgroundColor: color ? 'red' : 'black'}]}
        onPress={updateState}>
        <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
          {'  Click Here ' + counter}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

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
    marginTop: 10,
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    // resizeMode: 'stretch',
  },
});
