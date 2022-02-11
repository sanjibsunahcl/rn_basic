import * as constants from '../constants';

const intialState = {
  isLoading: true,
  responseData: null,
  error: null,
};

const apiReducer = (state = intialState, action) => {
  switch (action.type) {
    case constants.START_REQUEST: {
      return {
        isLoading: true,
      };
    }
    case constants.END_REQUEST: {
      return {
        isLoading: false,
      };
    }
    case constants.RESP_ERROR: {
      return {
        isLoading: false,
      };
    }
    case constants.RESP_ERROR: {
      return {
        error: action.error,
      };
    }
    case constants.GET_RESPONSE_DATA: {
      console.log('response data' + action.response);
      return {
        responseData: action.response,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};
export default apiReducer;
