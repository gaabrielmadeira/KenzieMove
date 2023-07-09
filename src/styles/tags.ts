import { styled } from "styled-components";
import { TitleStyles } from "./typography";

export const StyledTags = styled.span`
  display: block;
  text-align: center;

  color: var(--color-grey-2);
  font-size: var(--font-size-6);
  font-family: var(--font-primary);
  font-style: normal;
  font-weight: 700;

  width: clamp(8.25rem, 20%, 10.3125rem);
  height: clamp(2rem, 20%, 2.6875rem);
  padding: 5px;

  border-radius: 15.9375rem;
  background: var(--color-yellow);
`;

export const StyledFirstLetterTag = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 43px;
  height: 43px;
  border-radius: 255px;
  background: var(--color-yellow);
  ${TitleStyles}
`;
