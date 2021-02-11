import styled from "styled-components";

const Wrapper = styled.div`
  .home-page__title {
    font-weight: 500;
    text-align: center;
    font-size: 25px;
    line-height: 1.63;
    color: #008080;
  }
  .home-page__title:not(:last-child) {
    margin-top: 50px;
  }

  .home__list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0;
    margin: 0;
    list-style: none;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .home__list-item {
  }
  .home__list-item:not(:last-child) {
    margin-right: 15px;
  }
  .home__list-item-link {
    font-weight: 500;
    font-size: 25px;
    line-height: 1.63;
    color: #008080;
    border: 1px solid #008080;
    border-radius: 10px;
    text-decoration: none;
    text-transform: uppercase;
    padding: 10px 15px;
  }
  .home__list-item-link:hover {
    color: red;
    border: 1px solid red;
  }
  .active-link {
    color: red;
  }
`;

export default Wrapper;
