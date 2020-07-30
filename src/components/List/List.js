import React from "react";
import MonthListItem from "../MonthListItem";
import UserListItem from "../UserListItem";
import "./list.css";

const List = ({items, isUsers, changeFilter}) => {
  const list = items.map((item) => {
    const {id, ...itemProps} = item;

    return (
      <div key={id}>
        {isUsers ? <UserListItem {...itemProps} /> :
          <MonthListItem
            {...itemProps}
            changeFilter={() => changeFilter(id)}
          />
        }
      </div>
    );
  });

  if (items) {
    return <div className="list">{list}</div>;
  } else {
    return null;
  }
};

export default List;
