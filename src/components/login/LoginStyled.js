import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  padding: 50px;
  width: 432px;
  background-color: #fff0f5;
  border-radius: 4px;
  margin: 20px auto;
  box-shadow: 7px 5px 7px 5px rgba(140, 140, 140, 0.75);
  .login__title {
    font-weight: 700;
    text-align: center;
    font-size: 25px;
    line-height: 1.63;
    color: #008080;
    margin-bottom: 20px;
  }
  .login__form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .login__form-label {
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.63;
    color: #008080;
    //margin-bottom: 20px;
  }
  .login__form-input {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.63;
    color: #008080;

    width: 400px;
    border: 1px solid #696969;
    border-radius: 4px;
    padding: 10px 15px;
    margin-top: 5px;
    margin-bottom: 20px;
  }
  .login__form-input:focus,
  .login__form-input:hover {
    outline: inherit;
    border: 1px solid #cd5c5c;
    transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .login__form-btn {
    /* display: inline-block; */
    align-items: center;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.63;
    color: #008080;
    width: 100px;
    padding: 7px 10px;
    background-color: #ffdab9;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    outline: none;
  }
  .login__form-btn:hover {
    color: #fff;
    background-color: #dda0dd;
    box-shadow: 7px 7px 12px 3px rgba(0, 0, 0, 0.42);
    transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export default Wrapper;
