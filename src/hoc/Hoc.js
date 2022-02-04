import React, {useState} from 'react';

const Hoc = HocComponent => {
  return function (...props) {
    const [counter, setCounter] = useState(0);

    props.counter = counter;
    props.setCounter = setCounter;
    return <HocComponent {...props} />;
  };
};

export default Hoc;
