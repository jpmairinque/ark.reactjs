import styled from "styled-components";

export const Wrapper = styled.div`
  width: 600px;
  
  margin: auto;

  font-family: "Montserrat";
  display: flex;
  flex-direction: column;

  h1 {
    color: #4db5b9;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;

  input {
    padding: 5px;
    background-color: #e9ecef;
    border: none;
    border-radius: 15px;
    height: 40px;
    margin-bottom: 2rem;
    font-size: 16px;
  }

  span {
    margin-bottom: 10px;
    font-size: 19px;
  }
`;

export const DoneButton = styled.button`
  font-family: "Montserrat";
  width: 200px;
  height: 50px;
  background-color: #4db5b9;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  font-size: 1.5rem;
  cursor: pointer;
    align-self: center;

  &:hover {
    background-color: #4db5b99b;
  }
`;

export const ErrorMsg = styled.span`
  
  color: red;
  border-radius: 50px;
  font-size: 15px;
  text-align: center;
  margin-top: 2rem;
`;
