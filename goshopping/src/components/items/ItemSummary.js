import React from "react";
import moment from "moment";

const ItemSummary = ({ item }) => {
  return (
    <div className="card z-depth-0 ItemSummary">
      <div className="card-content grey-text text-darken0-3">
        <span className="card-title">{item.title}</span>
        <p>
          Posted by {item.authorFirstName} {item.authorLastName}
        </p>
        <p className="grey-text">
          {moment(item.createdAt.toDate().toString()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default ItemSummary;
