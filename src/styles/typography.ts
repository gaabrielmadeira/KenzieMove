import { css, styled } from "styled-components";

interface IFontSizeProps {
  fontSize: "large" | "medium" | "h3" | "";
}

export const TitleStyles = css<IFontSizeProps>`
  color: var(--color-white);
  font-family: var(--font-primary);
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  ${({ fontSize }) => {
    switch (fontSize) {
      case "large":
        return "font-size: var(--font-size-2);";
      case "medium":
        return "font-size: var(--font-size-4);";
      case "h3":
        return "font-size: var(--font-size-3);";
      case "":
        return "font-size: var(--font-size-1);";
    }
  }}
`;

export const StyledTitleOne = styled.h1<IFontSizeProps>`
  ${TitleStyles}
`;

export const StyledTitleThree = styled.h3<IFontSizeProps>`
  ${TitleStyles}
`;

export const StyledParagraph = styled.p`
  color: var(--color-white);
  font-size: var(--font-size-5);
  font-family: var(--font-secundary);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StyledMenuItem = styled.p`
  color: var(--color-white);
  font-size: var(--font-size-6);
  font-family: var(--font-primary);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
