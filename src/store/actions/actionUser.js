export const GET_ALL_USERS = "GET_ALL_USERS";
export const ADD_USER = "ADD_USER";


export const getAllUsers = (data) => ({
  type: GET_ALL_USERS,
  payload: {
    ...data,
  },
});

export const addUser = (user) => ({
  type: ADD_USER,
  payload: {
    user,
  },
});
