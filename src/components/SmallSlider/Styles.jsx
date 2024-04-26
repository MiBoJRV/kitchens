import styled from "styled-components";
// import Bg1 from '../../../public/right-arr.svg';
// import Bg2 from '../../../public//left-arr.svg';
export const SwiperInner = styled.div`
  background: #EEE;

  .swiper {
    max-width: 970px;

    &-pagination {
      display: none;
      
      @media only screen and (max-width: 640px) {
        display: block;
      }
    }

    &-pagination {
      margin-bottom: 30px;
      &-bullet {
        width: 50px;
        height: 5px;
        border-radius: 2.5px;
        background: #FFFFFF;
        opacity: 1;
        margin: 0 5px !important;

        &-active {
          background: #D4B254;
        }
      }
    }
    &-text {
      max-width: 700px;
      width: 100%;
      margin: 0 auto;
      text-align: center;
      padding: 117px 50px;
    }

    &-button-prev:after, &-button-next:after {
      color: #D4B254;
      //display: none;
    }
    &-button-next {
      background-repeat: no-repeat;
      background-size: 100% auto;
      background-position: center;
      width: 50px;
      height: 50px;
      
      @media only screen and (max-width: 640px) {
      display: none;
      }
    }

    &-button-prev {
      background-repeat: no-repeat;
      background-size: 100% auto;
      background-position: center;
      width: 50px;
      height: 50px;

      @media only screen and (max-width: 640px) {
        display: none;
      }
    }
  }

  h4 {
    margin-bottom: 17px;
  }

  h3 {
    margin-bottom: 24px;
  }

 
`;