import styled from "styled-components";

export const Nav = styled.nav`
  @media only screen and (max-width: 991px) {
    display: none;
  }
  
  &.mobile-nav {
    display: block;
    
    ul {
      display: flex;
      flex-direction: column;
      gap: 15px;
      align-items: center;

    }
  }
  ul {
    display: flex;
    gap: 40px;
    
    li {
      a {
        color: #FFF;
        text-align: center;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 3px;
        text-transform: uppercase;
        text-decoration: none;
      }
    }
  }
`;