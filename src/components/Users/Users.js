import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllUsers } from "../../store/actions/usersAction";
import { User } from "./User";


export const Users = () => {
  const dispatch = useDispatch();

  const handleAPICall = () => {
    dispatch(getAllUsers(dispatch));
  };

  useEffect(() => {
    handleAPICall();
  }, []);

  const users = useSelector((state) => state.userReducer.users);

  return (
    <div className="user-wrapper">
      {users ? (
        Object.values(users).map((user) => (
          <User
            key={user.id}
            avatar={user.avatar}
            name={user.name}
            userName={user.username}
          />
        ))
        ) : (
          <p>loading...</p>
        )}
    </div>
  );
};
