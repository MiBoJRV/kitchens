import styled from "styled-components";

export const HeaderWrap = styled.div`
  //max-width: 1310px;
  //width: 100%;
  //margin: 0 auto;
  //padding: 0 20px;
  //display: flex;
  //justify-content: space-between;
  //align-items: center;
  //position: absolute;
  //z-index: 100;
  //left: 50%;
  //transform: translate(-50%, 30px);
  
  .desktop-menu {
    max-width: 1310px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    z-index: 98;
    left: 50%;
    transform: translate(-50%, 30px);
  }
  
  .mobile-btn {
    display: none;
    border: none;
    background: transparent;
    outline: none;
    position: absolute;
    right: 20px;
    top: 34px;
    z-index: 100;

    @media only screen and (max-width: 991px) {
      display: block;
    }
  }
  
  .mobile-menu {
    position: absolute;
    z-index: 98;
    width: 100%;
    background: #000;
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    
    @media only screen and (min-width: 992px) {
      display: none;
    }
  }
`;