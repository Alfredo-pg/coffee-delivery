import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;

  gap: 2rem;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.125rem;

    color: ${(props) => props.theme['base-subtitle']};

    margin-top: 2.5rem;
    margin-bottom: 1rem;
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  height: 23.25rem;

  margin-bottom: 0.75rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-card']};
`

export const FormHeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 35rem;
  height: 2.75rem;

  margin: 2.5rem 2.5rem 2rem;

  p {
    &:first-child {
      color: ${(props) => props.theme['yellow-dark']};
    }

    &:last-child {
      width: 33.125rem;
      margin-left: 1.875rem;

      font-size: 0.875rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-text']};
      line-height: 130%;
    }
  }

  h3 {
    width: 33.125rem;
    margin-left: 0.5rem;

    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const FormMainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 35rem;
  height: 13.5rem;

  margin: 0 2.5rem 2.5rem;

  input {
    width: 12.5rem;
    height: 2.625rem;

    margin-bottom: 1rem;
    margin-right: 0.75rem;
    padding: 0.75rem;
    outline: none;

    color: ${(props) => props.theme['base-text']};

    font-size: 0.875rem;

    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;

    &:focus {
      border: 1px solid ${(props) => props.theme['yellow-dark']};
    }

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:nth-child(2) {
      width: 35rem;
    }

    &:nth-child(4) {
      width: 21rem;
    }

    &:nth-child(6) {
      width: 16.5rem;
    }

    &:nth-child(7) {
      width: 3.75rem;
    }
  }
`

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  height: 12.9375rem;

  border-radius: 6px;

  background-color: ${(props) => props.theme['base-card']};
`

export const PaymentHeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 35rem;
  height: 2.75rem;

  margin: 2.5rem 2.5rem 2rem;

  p {
    &:first-child {
      color: ${(props) => props.theme.purple};
    }

    &:last-child {
      width: 33.125rem;
      margin-left: 1.875rem;

      font-size: 0.875rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-text']};
      line-height: 130%;
    }
  }

  h3 {
    width: 33.125rem;
    margin-left: 0.5rem;

    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const PaymentOptionsContainer = styled.div`
  display: flex;

  margin: 0 2.5rem 2.5rem 2.5rem;

  gap: 0.75rem;

  width: 35rem;
  height: 3.1875rem;
`

export const PaymentCardContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 11.166875rem;
  height: 3.1875rem;

  background-color: ${(props) => props.theme['base-button']};
`

export const ConfirmOrderContainer = styled.div`
  width: 28rem;
  height: 31.125rem;

  border-radius: 6px 44px;

  background-color: ${(props) => props.theme['base-card']};
`
