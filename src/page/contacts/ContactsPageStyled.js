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

  .logo-appear {
    opacity: 0;
    transform: translateX(-100%);
  }

  .logo-appear-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 500ms linear;
  }

  .phonebook-title {
    font-weight: 700;
    font-size: 25px;
    line-height: 1.63;
    color: #008080;
    margin-bottom: 20px;
  }

  .message-enter {
    opacity: 0;
    transform: translateX(100%);
  }
  .message-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 250ms;
  }
  .message-exit {
    opacity: 1;
    transform: translateX(0);
  }
  .message-exit-active {
    opacity: 0;
    transform: translateX(100%);
    transition: all 250ms;
  }

  .filter-enter {
    opacity: 0;
    transition: all 250ms linear;
    transform: translateX(-100%) translateY(-100%);
  }
  .filter-enter-active {
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
  .my-filter-exit {
    opacity: 1;
  }
  .filter-exit-active {
    opacity: 0;
    transform: translateX(100%) translateY(-100%);
    transition: all 250ms linear;
  }
  .phonebook-title-second {
    text-align: center;
    font-weight: 700;
    font-size: 25px;
    line-height: 1.63;
    color: #008080;
    margin-bottom: 20px;
  }
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export default Wrapper;
