import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../store/actions/usersAction";
import "./styles.css";

export const AddTweets = () => {
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const [selectedUserName, setSelectedUserName] = useState("");
    const dispatch = useDispatch();
  
    const handleAPICall = async () => {
      const userRes = await fetch("http://domer.tech:9999/users/");
      const userData = await userRes.json();
      
      dispatch(getAllUsers(userData.data));
    };
  
    useEffect(() => {
      handleAPICall();
    }, []);
  
    const users = useSelector((state) => state.userReducer.users);
    console.log(users);
    const addTweet = () => {
      if (content && image) {
        const user = Object.values(users).find((u) => u.name === selectedUserName);
        const tweet = {
          userId: user.id,
          content: content,
          image: image,
        };

        axios.post("http://domer.tech:9999/tweets/", tweet);
        setContent("");
        setImage("");
        setSelectedUserName("");
      }
    };
  
    const handlerSelectUser = (e) => setSelectedUserName(e.target.value);
    const handlerIputImage = (e) => setImage(e.target.value);
    const handlerIputContent = (e) => setContent(e.target.value);

    return (
      <div className="add-user">
        <select onChange={handlerSelectUser}>
          {users ? Object.values(users).map((u) => (
                <option name={u.id}>{u.name}</option>
              ))
            : null}
        </select>
  
        <input
          type="text"
          className="input"
          value={content}
          onChange={handlerIputContent}
          placeholder="content"
        />
        <input
          type="text"
          className="input"
          value={image}
          onChange={handlerIputImage}
          placeholder="image"
        />
        <button onClick={addTweet} className="add-button">
          ADD TWEET
        </button>
      </div>
    );
  };
  