import ApiUtils from '../../utils/apiUtils';
import * as constants from '../constants';

export function actionStartRequest() {
  return {
    type: constants.START_REQUEST,
  };
}
export function actionEndRequest() {
  return {
    type: constants.END_REQUEST,
  };
}

export function actionSetError(error) {
  return {
    type: constants.RESP_ERROR,
    error,
  };
}

//Notifications items action get data
export function actionGetApiData(response) {
  return {
    type: constants.GET_RESPONSE_DATA,
    response,
  };
}

export function getApiData() {
  return dispatch => {
    dispatch(actionStartRequest());
    return ApiUtils.get('https://reactnative.dev/movies.json')
      .then(response => {
        dispatch(actionEndRequest());
        dispatch(actionGetApiData(response));
      })
      .catch(e => {
        dispatch(actionEndRequest());
        dispatch(actionSetError(e.message));
      });
  };
}
