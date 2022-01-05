export const GET_ALL_TWEETS = "GET_ALL_TWEETS";
export const ADD_POST = "ADD_POST";

export const getAllTweets = async (dispatch) => {
  try {
    const res = await fetch("http://domer.tech:9999/users/");
    const data = await res.json();

    dispatch(setAllTweets(data));
  } catch(e) {
    console.log(e);
  }
}

export const setAllTweets = (data) => ({
    type: GET_ALL_TWEETS,
    payload: {
      ...data,
    },
});
  
export const addPost = (data) => ({
    type: ADD_POST,
    payload: {
      data,
    },
});