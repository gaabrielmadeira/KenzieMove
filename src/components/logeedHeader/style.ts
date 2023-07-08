import { styled } from "styled-components";

export const StyledDiv = styled.div`
  .name_container{
    display: none;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  @media(min-width: 750px){
    .name_container{
      display: flex;
    }
  }
`