import { ADD_TO_FAVORITES } from "../actions/addToFavorites";
import { REMOVE_FROM_FAVORITES } from "../actions/removeFromFavorites";
import { GET_COMMENTS } from "../actions/getComments";
import { ADD_NEW_COMMENT } from "../actions/addNewComment";

const commentState = {
  favorites: [],
  comments: []
};

export const commentsReducer = (state = commentState, action) => {
  const { type, favoriteComment, id, comments, comment } = action;
  switch (type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, favoriteComment]
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(comment => comment.id !== id)
      };
    case GET_COMMENTS:
      return {
        ...state,
        comments: [...state.comments, ...comments]
      };
    case ADD_NEW_COMMENT:
      return {
        ...state,
        comments: [...state.comments, comment]
      };
    default:
      return state;
  }
};
