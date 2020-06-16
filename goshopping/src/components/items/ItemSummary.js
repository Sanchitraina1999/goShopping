import React from "react";

const ItemSummary = ({ item }) => {
  return (
    <div className="card z-depth-0 ItemSummary">
      <div className="card-content grey-text text-darken0-3">
        <span className="card-title">{item.title}</span>
        <p>Posted by {item.authorFirstName} {item.authorLastName}</p>
        <p className="grey-text">12 June, 2020 7pm</p>
      </div>
    </div>
  );
};

export default ItemSummary;
