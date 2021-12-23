import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer } from "./reducers/userReducer";
import { tweetsReducer } from "./reducers/tweetsReducer";
import  thunk from "redux-thunk";


export const reducer = combineReducers({
	userReducer,
	tweetsReducer
});

export const store = createStore(
	reducer,
	applyMiddleware(thunk)
);
