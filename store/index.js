import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import general from "../service/general/reducer";
import choices from "../service/choices/reducer";

const INITIAL_STATE = {};

export function initializeStore(initialState = INITIAL_STATE) {
	return createStore(
		combineReducers({ general, choices }),
		initialState,
		composeWithDevTools(applyMiddleware(thunk))
	);
}
