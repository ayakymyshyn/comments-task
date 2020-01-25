import React, { useState } from "react";
import { connect } from "react-redux";

import { addNewComment } from "../../redux/actions/addNewComment";
import {
  FormWrapper,
  FormInput,
  StyledTextArea,
  Header,
  StyledButton
} from "./formStyles";

import { validateForm } from "../../utils/validateForm";

const AddCommentForm = ({ addNewComment, comments }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  // searching max id to increment it later
  let maxId = Math.max.apply(
    Math,
    comments.map(comment => comment.id)
  );

  return (
    <FormWrapper>
      <Header>add new comment</Header>
      <FormInput
        placeholder="Enter name"
        onChange={e => setName(e.target.value)}
      />
      <FormInput
        placeholder="Enter email"
        onChange={e => setEmail(e.target.value)}
      />
      <StyledTextArea
        placeholder="Enter your comment"
        onChange={e => setBody(e.target.value)}
      />
      <StyledButton
        onClick={e => {
          e.preventDefault();
          validateForm(name, email, body, addNewComment, {
            name,
            email,
            body,
            id: maxId + 1
          });
        }}
      >
        Post comment
      </StyledButton>
    </FormWrapper>
  );
};

const mapStateToProps = state => ({
  comments: state.commentsReducer.comments
});

const mapDispatchToProps = dispatch => ({
  addNewComment: comment => dispatch(addNewComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentForm);
