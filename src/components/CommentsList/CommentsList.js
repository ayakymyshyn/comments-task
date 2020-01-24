import React from "react";
import styled from "styled-components";
import Comment from "../Comment/Comment";

const CommentsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 55px;
`;

const StyledHeader = styled.h2`
  margin-top: 25px;
  color: #fff;
`;

const CommentsList = ({ comments }) => {
  return (
    <CommentsListWrapper>
      {comments && comments.length > 0 ? (
        comments.map(comment => <Comment key={comment.id} comment={comment} />)
      ) : (
        <StyledHeader>There is no comments here :(</StyledHeader>
      )}
    </CommentsListWrapper>
  );
};

export default CommentsList;
