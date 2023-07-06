import { styled } from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 30px 0;

  img {
    width: 150px;
  }
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
