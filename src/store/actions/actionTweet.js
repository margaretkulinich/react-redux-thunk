export const GET_ALL_TWEETS = "GET_ALL_TWEETS";
export const ADD_POST = "ADD_POST";


export const getAllTweets = (data) => ({
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