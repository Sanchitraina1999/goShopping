import React from "react";
import ItemSummary from "./ItemSummary";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
  return (
    <div className="Item-list section">
      {items &&
        items.map((item) => {
          return (
            <Link to={"/item/" + item.id} key={item.id}>
              <ItemSummary item={item} />
            </Link>
          );
        })}
    </div>
  );
};

export default ItemList;
