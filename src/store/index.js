import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import rootReducer from "../reducers";
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

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
