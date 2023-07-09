import { css, styled } from "styled-components";

interface IContainerProps{
  page?: "login";
}

export const StyledContainer = styled.div<IContainerProps>`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  ${({page}) => {
    switch (page) {
      case "login":
        return css`
          margin-bottom: 5%;
          padding-left: 3%;
        `
      default:
        break;
    }
  }}
`