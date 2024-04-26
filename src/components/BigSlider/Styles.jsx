import styled from "styled-components";

export const SwiperInner = styled.div`
    .swiper {
      &-slide {
        position: relative;
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

      img {
        width: 100%;
        height: auto;
        
        @media only screen and (max-width: 1199px) {
          min-height: 550px;
          object-fit: cover;
        }
      }
      &-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        max-width: 760px;
        text-align: center;
        padding: 0 20px;
        
        p {
          color: #FFF;
          margin: 0 0 1px;
        }
        
        h2 {
          margin: 0 auto 33px;
          color: #FFF;
          
          @media only screen and (max-width: 991px) {
          font-size: 42px;
            line-height: 52px;
          }
        }
      }
    }
`;