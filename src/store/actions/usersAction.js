export const GET_ALL_USERS = "GET_ALL_USERS";
export const ADD_USER = "ADD_USER";

export const getAllUsers = async (dispatch) => {
  try {
    const res = await fetch("http://domer.tech:9999/users/");
    const data = await res.json();

    dispatch(setAllUsers(data));
  } catch(e) {
    console.log(e);
  }
}

export const setAllUsers = (data) => ({
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
