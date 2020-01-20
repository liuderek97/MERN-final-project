import * as actionType from "./types";

// token actions
export const setToken = data => {
  return {type: actionType.STORE_TOKEN, data};
};

export const removeToken = () => {
  return {type: actionType.REMOVE_TOKEN};
};

// user actions
export const storeUserDetails = data => {
  return {type: actionType.STORE_USER, data};
};

export const removeUserDetails = () => {
  console.log("REMOVE USER")
  return {type: actionType.REMOVE_USER};
};
