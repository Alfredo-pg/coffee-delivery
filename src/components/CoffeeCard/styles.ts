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

  h1 {
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

export const FooterContainer = styled.footer`
  display: flex;
  margin: auto;
`
