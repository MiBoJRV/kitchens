import styled from "styled-components";

export const SocialList = styled.ul`
  display: flex;
  gap: 12px;
  
  @media only screen and (max-width: 991px) {
    display: none;
  }
  
  &.mobile-social {
    display: flex;
  }
`;