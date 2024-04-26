import styled from "styled-components";

export const ButtonStyled = styled.button`
  border-radius: 30px;
  background: #D4B254;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.20);
  backdrop-filter: blur(5px);
  outline: none;
  padding: 21px 59px;
  color: #FFF;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 3px;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid transparent;

  &.outlined {
    background: transparent;
    border: 1px solid #FFF;
  }

  &.header {
    @media only screen and (max-width: 991px) {
      display: none;
    }
  }
  
  &.mobile {
    display: block;

    &:hover {
      color: #222;
      background: #FFF;
    }
  }

  &:hover {
    border-radius: 30px;
    background: #C8A74B;
    box-shadow: 0px 2px 2.5px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(5px);
    border: 1px solid transparent;
  }
`;