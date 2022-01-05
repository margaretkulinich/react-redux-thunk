import { ADD_POST, GET_ALL_TWEETS } from "../actions/tweetsAction";

const defaultState = [];

export const tweetsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ALL_TWEETS:
      return {
        ...state,
        tweets: action.payload,
      };

    case ADD_POST:
      return {
        ...state,
        tweets:	state.tweets.concat(action.payload),
      };
      
    default:
      return state;
 }
};