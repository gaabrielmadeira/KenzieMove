import { css, styled } from "styled-components";

const StyledText = css`
  color: var(--color-white);
  font-size: var(--font-size-7);
  font-family: var(--font-primary);
  font-weight: 700;
`;
const StyledFormDefault = css`
  height: 4.35rem;
  background: var(--color-grey-1);
  padding: 1.44rem 2rem 1.44rem 2rem;
`;
interface IStyledInputProps {
  inputsize: "login" | "register";
}

export const StyledInput = styled.input<IStyledInputProps>`
  ${StyledFormDefault}
  ${StyledText}

  &::placeholder {
    ${StyledText}
  }

  ${({ inputsize }) => {
    switch (inputsize) {
      case "login":
        return css`
          width: 100%;
        `;
      case "register":
        return css`
          width: 100%;
          padding: 1rem;
        `;
    }
  }}
`;

export const StyledSelect = styled.select`
  background: var(--color-grey-1);
  height: 2.35rem;
  color: var(--color-white);
`;
export const StyledTextArea = styled.textarea`
  ${StyledFormDefault}
  height: 12.35rem;
  resize: none;
  color: var(--color-white);

  &::placeholder {
    ${StyledText}
  }
`;
