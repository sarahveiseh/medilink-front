import rootReducer from "../reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';


const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options. keeping this for future use
});


const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
));

export default store;
