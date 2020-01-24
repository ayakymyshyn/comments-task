import styled from "styled-components";

export const CommentCard = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Gelasio:400,700|Open+Sans:400,600&display=swap");
  background-color: #fff;
  min-height: 300px;
  width: 500px;
  border-radius: 15px;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  margin: 25px;
  font-family: "Gelasio", serif;
  overflow: hidden;
`;

export const AuthorName = styled.h2`
  color: #333;
  font-size: 2em;
  font-weight: 700;
  padding-left: 20px;
  text-shadow: 2px 2px 4px rgba(34, 35, 58, 0.35);
  margin: 0;
`;

export const Email = styled.p`
  color: #7b7992;
  font-size: 14px;
  font-weight: 400;
  padding: 20px;
  margin: 0;
`;

export const CommentText = styled.p`
  color: #333;
  padding: 25px;
  text-align: justify;
`;

export const AddToFavoriteButton = styled.button`
  display: inline-flex;
  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
  padding: 15px 35px;
  border-radius: 50px;
  color: #fff;
  box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
  text-decoration: none;
  font-size: 0.8em;
  justify-content: center;
  text-align: center;
  letter-spacing: 1px;
  font-family: "Open Sans", sans-serif;
  outline: none;
  margin: 10px 15px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
`;
