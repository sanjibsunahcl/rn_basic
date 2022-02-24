import {DrawerActions, StackActions} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';

let _navigator;

export function setNavigator(nav) {
  _navigator = nav;
}

// Gets the current screen from navigation state
export function getActiveRouteName(state) {
  if (_navigator) {
    //console.log('_navigator', _navigator.getCurrentRoute());
    return _navigator.getCurrentRoute().name;
  }
  //console.log('getActiveRouteName', state);
  if (!state) {
    return null;
  }
  const route = state.routes[state.index];
  if (route.state) {
    // Dive into nested navigators
    return getActiveRouteName(route.state);
  }

  return route.name;
}

export function navigateTo(routeName, params = {}) {
  console.log(routeName);
  if (_navigator && routeName) {
    const action = CommonActions.navigate({name: routeName, params: params});
    _navigator.dispatch(action);
  }
}

export function goBack() {
  _navigator.dispatch(CommonActions.back());
}

export function resetTo(routeName) {
  const resetAction = StackActions.reset({
    index: 0,
    key: null,
    actions: [CommonActions.navigate({routeName: routeName})],
  });
  _navigator.dispatch(resetAction);
}

export function closeDrawerMenu() {
  _navigator.dispatch(DrawerActions.closeDrawer());
}
