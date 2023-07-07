import { styled } from "styled-components";

export const StyledLoginForm = styled.form`
  width: clamp(16.25rem, 50vw, 41.1875rem);
  height: 35.75rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 2.1875rem 2.1875rem 2.1875rem 2.1875rem;
  background: var(--color-grey-2);

  .register__button{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 0.9375rem;
  }

  .register-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }
`

export const StyledFieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`