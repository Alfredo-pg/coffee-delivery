import styled from 'styled-components'

export const PaymentContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  margin-top: 0.75rem;
  border-radius: 6px;

  footer {
    margin-top: 2rem;
    display: flex;
    gap: 0.75rem;
  }
`
