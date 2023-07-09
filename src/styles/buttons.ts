
import { styled, css } from "styled-components";
const StyledDefault = css`
  background: var(--color-yellow);
  color: var(--color-grey-2);
  border-radius: 15.9375rem;
  padding: 0.5rem 1.69rem 0.5rem 1.88rem;
  font-family: var(--font-primary);
  font-weight: 700;
  font-size: var(--font-size-6);
  line-height: 1.625rem;
`;
interface IStyledButtonProps {
  buttonsize:
    | "login"
    | "small"
    | "medium"
    | "large"
    | "transparent"
    | "transparent-m"
    | "transparent-yellow";
}
export const StyledButton = styled.button<IStyledButtonProps>`
  ${StyledDefault}
  ${({ buttonsize }) => {
    switch (buttonsize) {
      case "login":
        return css`
          width: 100%;
          height: 4.1875rem;
        `;
      case "small":
        return css`
          width: auto;
          height: 2.6875rem;
        `;
      case "medium":
        return css`
          width: auto;
          height: 3.375rem;
        `;
      case "large":
        return css`
          width: auto;
          height: 4.1875rem;
          padding: 1.25rem 2rem 1.25rem 2.12rem;
        `;
      case "transparent":
        return css`
           width: auto;
          height: 4.1875rem;
          color: var(--color-white);
          background: transparent;
          font-size: clamp(var(--font-size-8), 4vw, var(--font-size-7));
        `;
      case "transparent-m":
        return css`
          width: auto;
          height: 3.375rem;
          color: var(--color-white);
          background: transparent;
          @media (max-width: 500px) {
            display: none;
          }
        `;
      case "transparent-yellow":
        return css`
          padding: 1rem;
          color: var(--color-yellow);
          background: transparent;
          font-size: clamp(var(--font-size-7), 100%, var(--font-size-6));
        `;
    }
  }}
`;

