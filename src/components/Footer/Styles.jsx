import styled from "styled-components";

export const FooterInner = styled.footer`
  background: #000000;
  padding: 40px 20px 60px;

  .footer-content {
    max-width: 1300px;
    margin: 0 auto;
    border-bottom: 1px solid #707070;
  }

  .footer-logo {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      margin: 0 18px;
      position: relative;
    }
  }

  .footer-links {
    display: flex;
    justify-content: space-between;
    max-width: 860px;
    width: 100%;
    margin: 42px auto 0;

    @media only screen and (max-width: 640px) {
      flex-direction: column;
      align-items: center;
      gap: 25px;
    }

    &-block {
      @media only screen and (max-width: 640px) {
        text-align: center;
      }
    }

    h4 {
      color: #FFF;
      margin-bottom: 24px;

      @media only screen and (max-width: 640px) {
        margin-bottom: 10px;
      }
    }

    ul {
      @media only screen and (max-width: 640px) {
        text-align: center;
      }

      &.socials {
        display: flex;
        gap: 15px;
      }

      li {
        a {
          color: #FFF;
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          line-height: 30px;
          letter-spacing: 3px;
          text-transform: uppercase;
          text-decoration: none;

          &.footer-social {
            display: flex;
            width: 40px;
          }
        }
      }
    }

  }
`;