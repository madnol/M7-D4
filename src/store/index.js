import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import errorReducer from "../reducers/errors";
import searchResaultReducer from "../reducers/searchResault";
import selectedJobReducer from "../reducers/selectedJob";
import userReducer from "../reducers/user";

import thunk from "redux-thunk";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  user: {
    username: "",
    favourites: [],
    recentSearches: [],
    _id: "",
  },
  searchResults: [],
  selectedJob: [],
  errors: {
    show: false,
    errors: [],
  },
};

// const bigReducer = combineReducers({ cart: cartReducer, user: userReducer })
const bigReducer = combineReducers({
  user: userReducer,
  searchResults: searchResaultReducer,
  selectedJob: selectedJobReducer,
  errors: errorReducer,
});

export default function configureStore() {
  return createStore(
    bigReducer,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  );
}
