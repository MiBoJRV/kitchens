import styled from "styled-components";

export const ImageTextInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 991px) {
    flex-direction: column-reverse;
  }

  .image {
    width: 50%;

    @media only screen and (max-width: 991px) {
      width: 100%;
    }

    img {
      width: 100%;
      height: auto;
      object-fit: cover;

      @media only screen and (max-width: 991px) {
        min-height: 500px;
      }
    }
  }

  .text {
    width: 50%;
    padding: 20px 20px 20px 70px;

    @media only screen and (max-width: 1199px) {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    @media only screen and (max-width: 991px) {
      width: 100%;
      padding: 70px 20px;
    }


    &-content {
      max-width: 580px;
      width: 100%;
    }

    h2 {
      margin-bottom: 33px;
      
      @media only screen and (max-width: 1199px) {
        font-size: 32px;
        line-height: 32px;
        margin-bottom: 15px;
      }
    }

    .sub-title {
      margin-bottom: 15px;
    }


    .paragraph {
      margin-bottom: 27px;
    }
  }
`;