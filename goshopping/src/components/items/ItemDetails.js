import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const ItemDetails = (props) => {
  const { item, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (item) {
    return (
      <div className="container section Item-Details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{item.title}</span>
            <p>{item.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {item.authorFirstName} {item.authorLastName}
            </div>
            <div>{moment(item.createdAt.toDate().toString()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const items = state.firestore.data.items;
  const item = items ? items[id] : null;
  return {
    item,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "items" }])
)(ItemDetails);
