import React from "react";

const ItemDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section Item-Details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Item Title-{id}</span>
          <p>Lorem Ipsum dolor sit amet, consectet jhfhgf gsih ih</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Sanchit Raina</div>
          <div>June 12,2020 22:23</div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
