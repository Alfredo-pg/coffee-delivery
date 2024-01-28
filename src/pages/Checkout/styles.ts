import styled from 'styled-components'

export const CheckoutFormContainer = styled.form`
  display: flex;
  gap: 2rem;

  h1 {
    font-size: 1.125rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
