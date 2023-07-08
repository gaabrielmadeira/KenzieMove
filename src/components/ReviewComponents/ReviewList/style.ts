import { styled } from "styled-components";

export const StyledUl = styled.ul`
display: flex;
width: clamp(280px, 100%, 1550px);

flex-wrap: wrap;
gap: 30px;

margin: 0 auto;
padding: 0 1rem;
`

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  gap: 15px;
`