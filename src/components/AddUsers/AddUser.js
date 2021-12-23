import { useState } from "react";
import axios from "axios";
import "./styles.css";

export const AddUser = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handlerAddUser = () => {
    if (name && userName && avatar) {
      setUserName("@" + name);

      const user = {
        name: name,
        username: userName,
        avatar: avatar,
      };

      axios.post("http://domer.tech:9999/users/", user);
      setName("");
      setUserName("");
      setAvatar("");
    }
  };

  const handleInputName = (e) => setName(e.target.value);
  const handleInputUserName = (e) => setUserName(e.target.value);
  const handleInputAvatar = (e) => setAvatar(e.target.value);

  return (
    <div className="add-user">
      <input
        type="text"
        className="input"
        value={name}
        onChange={handleInputName}
        placeholder="name"
      />
      <input
        type="text"
        className="input"
        value={userName}
        onChange={handleInputUserName}
        placeholder="@username"
      />
      <input
        type="text"
        className="input"
        value={avatar}
        onChange={handleInputAvatar}
        placeholder="avatar link"
      />
      <button onClick={handlerAddUser} className="add-button">
        ADD USER
      </button>
    </div>
  );
};
