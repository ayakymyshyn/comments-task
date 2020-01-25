import React from "react";
import { connect } from "react-redux";
import { addToFavorites } from "../../redux/actions/addToFavorites";
import { removeFromFavorites } from "../../redux/actions/removeFromFavorites";
import { checkExistingAndCb } from "../../utils/checkExisting";
import { addNotification } from "../../utils/addNotification";

import {
  CommentCard,
  Email,
  AuthorName,
  CommentText,
  AddToFavoriteButton
} from "./commentStyle";

const Comment = ({
  comment,
  addToFavorites,
  removeFromFavorites,
  favorites
}) => {
  const notificationMessage = comment.isFavorite
    ? "Comment has been removed"
    : "Comment added to favorites";

  const addOrRemoveComment = () => {
    comment.isFavorite
      ? removeFromFavorites(comment.id)
      : checkExistingAndCb(favorites, comment.id, addToFavorites, {
          ...comment,
          isFavorite: true
        });
  };

  return (
    <CommentCard>
      <Email>{comment.email}</Email>
      <AuthorName>{comment.name}</AuthorName>
      <CommentText>{`${comment.body.substring(0, 20)}...`}</CommentText>
      <AddToFavoriteButton
        onClick={() => {
          addOrRemoveComment();
          addNotification("success", notificationMessage, "Success!");
        }}
      >
        {comment.isFavorite ? "Remove from favorites" : "Add to favorites"}
      </AddToFavoriteButton>
    </CommentCard>  
  );
};

const mapStateToProps = state => ({
  favorites: state.commentsReducer.favorites
});

const mapDispatchToProps = dispatch => ({
  addToFavorites: comment => dispatch(addToFavorites(comment)),
  removeFromFavorites: id => dispatch(removeFromFavorites(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
