import styled from "styled-components";

export const Wrapper = styled.div`

    width: 600px;
    height: 500px;
    
    font-family: 'Montserrat';


    h1{
        color: #4DB5B9;
        text-align: center;
        margin-bottom: 2rem;
    }

`

export const InputBox = styled.div`

    display: flex;
    flex-direction: column;


    input{
        padding: 5px;
        background-color: #e9ecef;
        border: none;
        border-radius: 15px;
        height: 40px;
        margin-bottom: 2rem;
        font-size: 16px;
        
    }

    span{
        margin-bottom: 10px;
        font-size: 19px;
    }



`