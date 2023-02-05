import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;

  gap: 2rem;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;

    margin-top: 2.5rem;
    margin-bottom: 1rem;
  }
`

export const FormContainer = styled.div`
  width: 40rem;
  height: 23.25rem;

  margin-bottom: 0.75rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-input']};
`

export const PaymentContainer = styled.div`
  width: 40rem;
  height: 12.9375rem;

  border-radius: 6px;

  background-color: ${(props) => props.theme['base-input']};
`

export const ConfirmOrderContainer = styled.div`
  width: 28rem;
  height: 31.125rem;

  border-radius: 6px 44px;

  background-color: ${(props) => props.theme['base-input']};
`
