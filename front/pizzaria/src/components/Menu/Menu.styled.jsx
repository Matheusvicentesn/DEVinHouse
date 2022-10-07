import styled from "styled-components";

export const NavBarStyled = styled.header`
  #navbar {
    align-items: center;
    background-color: #395b64;
    color: #21495a;
    overflow: hidden;
    padding: 18px 34px;
    transition: 0.4s;
    width: 100%;
    top: 0;
    z-index: 99;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }

  #navbar img {
    height: 70px;
    width: auto;
  }

  #navbar a {
    float: left;
    color: #a5c9ca;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    line-height: 25px;
    border-radius: 4px;
    margin-right: 50px;
    margin-top: 8px;
    font-size: 24px;
  }

  #navbar #logo {
    font-size: 35px;
    font-weight: bold;
    transition: 0.4s;
  }

  #navbar-right {
    float: right;
  }

  @media screen and (max-width: 900px) {
    #navbar {
      padding: 20px 10px !important;
      text-align: center;
    }
    #navbar a {
      float: none;
      display: block;
      text-align: center;
    }
    #navbar-right {
      float: none;
    }
  }
  @media screen and (max-width: 900px) {
    header {
      margin-bottom: 5px;
    }
  }
`;
