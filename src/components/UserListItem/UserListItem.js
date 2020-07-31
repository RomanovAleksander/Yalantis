import React from 'react';
import './UserListItem.css';

const UserListItem = (props) => {
  const { firstName, lastName, dob } = props;
  const dateOption = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <div className="user">
      <div className="name">
        <b>Name:</b> {firstName} {lastName}
      </div>
      <div className="date"> <b>DOB: </b>
        {new Date(dob).toLocaleString("en-US", dateOption)}
      </div>
    </div>
  )
};

export default UserListItem;
