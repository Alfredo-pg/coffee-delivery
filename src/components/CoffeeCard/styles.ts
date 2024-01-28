import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  max-width: 16rem;
  height: 19.375rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  img {
    margin-top: -1.25rem;
    height: 7.5rem;
    width: 7.5rem;
  }

  h2 {
    margin-top: 1rem;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    padding: 0 1.25rem;
    margin-top: 0.5rem;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
  }
`

export const CoffeeCategories = styled.header`
  display: flex;
  gap: 0.25rem;
  margin-top: 0.75rem;

  color: ${(props) => props.theme['yellow-dark']};
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;

  span {
    height: 1.3125rem;
    background: ${(props) => props.theme['yellow-light']};
    border-radius: 100px;
    padding: 0.25rem 0.5rem;
  }
`

export const FormContainer = styled.form`
  display: flex;
  height: 2.375rem;
  width: 13rem;
  margin: auto;
  align-items: center;

  label {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-text']};

    &::before {
      content: 'R$ ';
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-text']};
    }
  }

  input {
    display: flex;
    width: 4.5rem;
    height: 2.375rem;
    border-radius: 6px;
    margin: 0 0.5rem 0 auto;
    background: ${(props) => props.theme['base-button']};
  }

  button {
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 6px;
    padding: 0.5rem;
    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['base-card']};
    cursor: pointer;
  }
`
