import React from "react";
import "./UserListItem.css";

const UserListItem = (props) => {
  const { firstName, lastName, dob } = props;

  return (
    <div className="user">
      <p className="name">Name: {firstName} {lastName}</p>
      <p> DOB: {dob}</p>
    </div>
  )
};

export default UserListItem;
