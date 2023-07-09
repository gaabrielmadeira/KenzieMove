import { styled } from "styled-components";
import { IBackgroundImageProps } from ".";

export const StyledMovieImage = styled.div<IBackgroundImageProps>`
  width: 100%;
  height: 34.3125rem;
  background-image: url(${movieImage => movieImage.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`