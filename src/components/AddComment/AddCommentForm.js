import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addNewComment } from "../../redux/actions/addNewComment";

import { AddToFavoriteButton } from "../Comment/commentStyle";
import { validateForm } from "../../utils/validateForm";

const FormWrapper = styled.form`
  max-width: 600px;
  margin: 150px auto;
  background-color: #fff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.5);
  border-radius: 10px;
  padding: 15px;
`;

export const Header = styled.h2`
  @import url("https://fonts.googleapis.com/css?family=Gelasio:400,700|Open+Sans:400,600&display=swap");
  font-family: "Gelasio", serif;
  color: #333;
  font-size: 2.5em;
  font-weight: 700;
  padding-left: 20px;
  text-shadow: 2px 2px 4px rgba(34, 35, 58, 0.35);
  margin: 10px;
  text-align: center;
  text-transform: uppercase;
`;

const FormInput = styled.input`
  background: #f2f2f2;
  border: none;
  outline: none;
  inner-shadow: none;
  padding: 20px;
  margin: 15px 10px;
  font-size: 17px;
  width: 90%;
`;

const StyledTextArea = styled.textarea`
  background: #f2f2f2;
  border: none;
  outline: none;
  inner-shadow: none;
  padding: 20px;
  margin: 15px 10px;
  font-size: 17px;
  width: 90%;
`;

const AddCommentForm = ({ addNewComment, comments }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

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
      <AddToFavoriteButton
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
      </AddToFavoriteButton>
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
