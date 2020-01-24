export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";

export const addToFavorites = favoriteComment => ({
    type: "ADD_TO_FAVORITES", 
    favoriteComment
})