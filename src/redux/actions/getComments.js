export const GET_COMMENTS = "GET_COMMENTS";

export const getComments = () => {
  return async dispatch => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await res.json();
    const comments = data.slice(0, 20);
    return dispatch({
      type: "GET_COMMENTS",
      comments
    });
  };
};
