import styled from 'styled-components'

export const Form= styled.form`
    width:100%;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:40px;

    img{
        width:190px;
        height:150px;
        position:relative;
        left:15px;
    }
`;

export const Label= styled.label`
    display:flex;
    flex-direction:column;
    color: rgba(0,0,0,0.7);

    span{
        color:red;
        position:absolute;
        margin-top:50px;
    }

`;

export const Input= styled.input`
    width:320px;
    height:30px;
    padding-left:10px;
    outline:none;
    border-radius:3px;
    border:1px solid rgba(0,0,0,0.3);
    color: rgba(0,0,0,0.7);
    font-size:14px;
`;
export const Button= styled.button`
    width:320px;
    height:36px;
    border-radius:10px;
    border:none;
    background-color: blue;
    color:white;
    font-weight:bold;

    &:active{
        opacity:0.6;
    }
`;