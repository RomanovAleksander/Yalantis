import React from "react";
import MonthListItem from "../MonthListItem";
import "./monthList.css";

const MonthList = ({months, changeFilter}) => {
  const monthList = months.map((month) => {
    const { id, ...monthProps } = month;

    return (
      <div key={id}>
        <MonthListItem
          {...monthProps}
          changeFilter={() => changeFilter(id)}
        />
      </div>
    );
  });

  if (months) {
    return <div className="month-list">{monthList}</div>;
  } else {
    return null;
  }
};

export default MonthList;
