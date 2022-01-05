import { useDispatch, useSelector } from "react-redux";
import { Tweet } from "./Tweet";

import "./styles.css";
import { getAllUsers } from "../../store/actions/usersAction";
import { useEffect } from "react";
import { getAllTweets } from "../../store/actions/tweetsAction";

 export const Tweets = ({ content, image }) => {
  const dispatch = useDispatch();

  const handleAPICall = () => {
    dispatch(getAllTweets(dispatch));
    dispatch(getAllUsers(dispatch));
  };
 
  useEffect(() => {
    handleAPICall();
  },);

  const tweets = useSelector((state) => state.tweetsReducer.tweets);
  const users = useSelector((state) => state.userReducer.users);

  return (
    <div>
      {tweets ? (
        Object.values(tweets).map((tweet) => {
          const id = tweet.userId;
          const user = users ? Object.values(users).find((u) => u.id === id) : null;

          return (
            <Tweet
              key={tweet.id}
              content={tweet.content}
              image={tweet.image}
              avatar={user ? user.avatar : null}
              name={user ? user.name : null}
              userName={user ? user.username : null}
            />
          );
        })
        ) : (
          <p>loading...</p>
        )
      }
    </div>
  );
};
