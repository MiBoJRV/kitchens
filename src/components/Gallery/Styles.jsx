import styled from "styled-components";

export const GalleryInner = styled.div`
  padding: 93px 10px 100px;
  text-align: center;

  @media only screen and (max-width: 991px) {
    padding: 40px 10px ;
  }
  
  .gallery-img {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    max-width: 1300px;
    width: 100%;
    margin: 38px auto 40px;

    img {
      max-width: calc(25% - 20px);
      width: 100%;
      min-height: 225px;
      min-width: 225px;
      margin: 10px;
      
      @media only screen and (max-width: 991px) {
        max-width: calc(50% - 20px);
        min-height: auto;
        min-width: auto;
      }
      
      @media only screen and (max-width: 540px) {
        max-width: calc(100% - 20px);
      }
    }
  }
`;