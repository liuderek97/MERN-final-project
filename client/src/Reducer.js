import * as actionType from "./components/auth/types"

const tokenInitialState = null;
const userInitialState = {};

const token = (state = tokenInitialState, action) => {
  switch (action.type) {
    case actionType.STORE_TOKEN:
      return action.data;
    case actionType.REMOVE_TOKEN:
      return null;
    default:
      return state;
  }
};

const user = (state = userInitialState, action) => {
  switch (action.type) {
    case actionType.STORE_USER:
      return action.data;
    case actionType.REMOVE_USER:
      return null;
    default:
      return state;
  }
};

const rootReducer = {
  user,
  token
};

// const rootReducer = (state, action) => {
//   return appReducer;
// };

export default rootReducer
