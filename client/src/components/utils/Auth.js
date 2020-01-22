import {store} from '../../Store';
import history from '../../history';
import {removeToken, removeUserDetails, storeUserDetails} from '../auth/actions';
import * as jwtDecode from 'jwt-decode';

const msTillExpiry = (token) => {
  let d = jwtDecode(token);
  let now = Date.now();
  let exp = new Date(d['exp'] * 1000);  // epoch = unix epoch * 1000
  return (exp - now);
};

const hrsTillExpiry = (token) => {
  return msTillExpiry(token) / (1000 * 60 * 60);  // convert difference in ms to difference in hours

};

const isExpired = (token) => {
  return hrsTillExpiry(token) <= 0; // if token <= 0, force re-login.
};

export const loggedIn = () => {
  const token = store.getState().token;
  return (token !== null) && (!isExpired(token));
};

export const logout = () => {
  fetch('auth/logout')
  store.dispatch(removeToken());
  store.dispatch(removeUserDetails());
  history.push("/login");
};

export const fetchUserDetails = () => {
  return (
    fetch('auth/user')
  .then(({data}) => {
    store.dispatch(storeUserDetails(data));
  })
  )
};

