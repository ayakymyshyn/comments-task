import styled from "styled-components";

export const FormWrapper = styled.form`
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

export const FormInput = styled.input`
  background: #f2f2f2;
  border: none;
  outline: none;
  inner-shadow: none;
  padding: 20px;
  margin: 15px 10px;
  font-size: 17px;
  width: 90%;
`;

export const StyledTextArea = styled.textarea`
  background: #f2f2f2;
  border: none;
  outline: none;
  inner-shadow: none;
  padding: 20px;
  margin: 15px 10px;
  font-size: 17px;
  width: 90%;
`;

export const StyledButton = styled.button`
  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
  border-radius: 28px;
  border: 1px solid #f09c43;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-size: 17px;
  padding: 16px 31px;
  text-decoration: none;
  outline: none;
  text-align: center;
`;
