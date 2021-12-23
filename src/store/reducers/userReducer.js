import { GET_ALL_USERS, ADD_USER } from "../actions/actionUser";

const initialState = {
  users: []
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case ADD_USER:
      return {
        ...state,
        users: action.payload,
      };
    default: 
      return state;
  }
};
