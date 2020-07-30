import React from "react";
import UserListItem from "../UserListItem";
import "./userList.css";

const UserList = ({users}) => {
  const usersList = users.map((user) => {
    const { id, ...userProps } = user;

    return (
      <div key={id}>
        <UserListItem
          {...userProps}
        />
      </div>
    );
  });

  if (users) {
    return <div className="user-list">{usersList}</div>;
  } else {
    return null;
  }
};

export default UserList;
