import styled from "styled-components";

export const Table = styled.table`

        font-family: 'Montserrat', sans-serif;
        width: 70%;
        border-right-color: #ffffff;
        margin-top: 10px;
        font-size: 18px;
        border-radius: 20px;
        border-collapse: collapse; 
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    th, td {
        /* border: 1px solid #343a40; */
        padding: 16px 24px;
        text-align: left;
      }

      th {
        background-color: #4DB5B9;
        color: #fff;
        width: 25%;
      }

      tbody tr:nth-child(odd){
        background-color: #f8f9fa;
      }

      
      tbody tr:nth-child(even){
        background-color: #e9ecef;
      }

`