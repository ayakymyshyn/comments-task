import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import { connect } from "react-redux";

import CommentsList from "./components/CommentsList/CommentsList";
import Navigation from "./components/Navigation/Navigation";
import AddCommentForm from "./components/AddComment/AddCommentForm";

import { getComments } from "./redux/actions/getComments";

import "react-notifications-component/dist/theme.css";
import "./App.css";

const App = ({ favorites, getComments, comments }) => {
  useEffect(() => {
    getComments();
  }, []);

  return (
    <Router>
      <Navigation />
      <ReactNotification />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <CommentsList comments={comments} />}
        />
        <Route
          path="/favorites"
          render={() => <CommentsList comments={favorites} />}
        />
        <Route path="/add-new-comment" component={AddCommentForm} />
      </Switch>
    </Router>
  );
};

const mapStateToProps = state => ({
  favorites: state.commentsReducer.favorites,
  comments: state.commentsReducer.comments
});

const mapDispatchToProps = dispatch => ({
  getComments: () => dispatch(getComments())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
