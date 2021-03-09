import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  //margin: 0 auto;

  .user-menu {
    //align-items: center;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.63;
    color: #008080;
  }
  .user-menu-name {
    font-weight: 500;
    text-transform: uppercase;
  }
  .user-menu-btn {
    display: inline-block;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.63;
    color: #008080;
    width: 100px;
    padding: 7px 10px;
    margin-left: 20px;
    background-color: #ffdab9;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    outline: none;
  }

  .user-menu-btn:hover {
    color: #fff;
    background-color: #dda0dd;
    box-shadow: 7px 7px 12px 3px rgba(0, 0, 0, 0.42);
    transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export default Wrapper;
