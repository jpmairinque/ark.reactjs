import styled from "styled-components";

export const Nav = styled.nav`
  font-family: 'Montserrat', sans-serif;
  height: 100px;
  width: 90%;
  margin: 0 auto;

  margin-bottom: 2rem;
  justify-content: space-around;
  display: flex;
`;

export const MoreBox = styled.div`


    font-size: 1.5rem;
    display: flex;
    align-items: center;

    h1{
      font-size: 5rem;
      margin-right: 18px;
      color:#4DB5B9
    }

    section{
      display: flex;
      flex-direction: column;
      justify-content: center;

      .compId{
        font-style:italic;
       
      }

      .uptext{
        opacity: 0.5;
        font-size: 1rem;
        margin-bottom: 7px;
      }
      
    }

`
