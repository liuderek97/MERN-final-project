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

// const nearingExpiry = (token) => {
//   let diff = hrsTillExpiry(token);
//   return diff > 0 && diff < (5 * 24); // if token expires < 5 days, refresh it.
// };

export const loggedIn = () => {
  const token = store.getState().token;
  return (token !== null) && (!isExpired(token));
};

export const logout = () => {
  history.push("/login");
  store.dispatch(removeToken());
  store.dispatch(removeUserDetails());
};

export const fetchUserDetails = () => {
  return (
    fetch('auth/user')
  .then(({data}) => {
    console.log(data)
    store.dispatch(storeUserDetails(data));
    
  })
  )
};

