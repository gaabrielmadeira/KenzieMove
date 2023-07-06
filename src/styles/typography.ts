import { css, styled } from "styled-components";

interface IFontSizeProps {
  fontSize: "large" | "medium";
}

export const TitleStyles = css`
  color: var(--color-white);
  font-family: var(--font-primary);
  font-weight: 700;
  font-style: normal;
  line-height: normal;
`;

export const StyledTitleOne = styled.h1<IFontSizeProps>`
  ${TitleStyles}

  ${({ fontSize }) => {
    switch (fontSize) {
      case "large":
        return "font-size: clamp( var(--font-size-4),100%, var(--font-size-1))";
      case "medium":
        return "font-size: clamp( var(--font-size-4),100%, var(--font-size-2))";
    }
  }}
`;

export const StyledTitleThree = styled.h3`
  ${TitleStyles}
  font-size: var(--font-size-3)
`;

export const StyledParagraph = styled.p`
  color: var(--color-white);
  font-size: clamp(var(--font-size-7), 100%, var(--font-size-5));
  font-family: var(--font-secundary);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StyledMenuItem = styled.p`
  color: var(--color-white);
  font-size: clamp(var(--font-size-7), 100%, var(--font-size-6));
  font-family: var(--font-primary);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
