import * as constants from '../constants';

export const geApiDataAction = () => ({
  type: constants.GET_RESPONSE_DATA,
});

export const setactionApiData = responseData => ({
  type: constants.SET_RESPONSE_DATA,
  responseData, 
});

export const setResponseLoaderAction = loading => ({
  type: constants.SET_RESPONSE_DATA_LOADER,
  loading,
});

