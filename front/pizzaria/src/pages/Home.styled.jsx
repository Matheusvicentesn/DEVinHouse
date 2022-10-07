import styled from "styled-components";

export const HomeStyled = styled.div`
  .split {
    height: 100%;
    width: 50%;
    position: fixed;
    overflow-x: hidden;
    padding-top: 50px;
  }

  .left {
    left: 0;

    background-color: #89a04b1d;
  }

  .right {
    right: 0;
    background-color: #b345457b;
  }

  .centered {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    text-align: center;
    padding-bottom: 200px;

  }

`;
