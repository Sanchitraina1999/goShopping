import React, { Component } from "react";
import { createItem } from "../../store/actions/itemActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class CreateItem extends Component {
  state = {
    title: "",
    content: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createItem(this.state)
    this.props.history.push('/');
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container margin-5">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-4">Add new item:</h5>
          <div className="input-field">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content:</label>
            <textarea
              className="materialize-textarea"
              id="content"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn red lighten-1 z-depth-0">Add Item</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createItem: (item) => {
      dispatch(createItem(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateItem);
