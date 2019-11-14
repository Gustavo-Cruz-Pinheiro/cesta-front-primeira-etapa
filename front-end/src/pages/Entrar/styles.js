import styled from "styled-components";

import bgLogin from "../../assets/background-login.png";

export const Container = styled.div`
  /* @import url("ttps://fonts.googleapis.com/css?family=Wallpoet&display=swap"); */
  color: #d2d2d2;
  height: 100%;
  width: 100%;
  background: url(${bgLogin}) no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 420px;
    width: 430px;
    background: rgba(70, 130, 180, 0.8);
    background-size: contain;
    border-radius: 10px;
  }

  form {
    width: 100%;
    max-width: 500px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
  }

  form h1 {
    /* font: 76px "Wallpoet", cursive; */
    -webkit-font-smoothing: antialiased !important;
    color: rgb(255, 255, 255);
    line-height: 110px;
  }

  label,
  input,
  button {
    width: 100%;
  }

  label {
    padding-top: 15px;
  }

  input,
  button {
    height: 50px;
    border: 0;
    font-size: 1.2em;
    outline: 0;
    border-radius: 10px;
  }

  input {
    background: rgba(255, 255, 255, 0.7);
    color: rgba(0, 0, 0, 0.8);
    padding: 0 15px;
  }

  button {
    margin-top: 20px;
    margin-bottom: 10px;
    font-weight: bold;
    background: #1568db;
    color: #fff;
    cursor: pointer;
  }

  p1 {
    padding-left: 150px;
  }

  @media (max-width: 798px) {
    background-size: cover;

    div {
      height: 100%;
      width: 100%;
      border-radius: 0px;
    }

    form h1 {
      font: 56px "Livvic", sans-serif;
      -webkit-font-smoothing: antialiased !important;
      color: rgba(255, 255, 255);
      line-height: 75px;
    }
  }
`;
