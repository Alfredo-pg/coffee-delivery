import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  border-radius: 6px 36px;

  background-color: ${(props) => props.theme['base-card']};

  img {
    width: 7.5rem;
    height: 7.5rem;

    position: relative;
    top: -1.25rem;
  }

  h3 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    margin: 0.5rem 1.25rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
  }
`

export const CoffeeDescriptionConainer = styled.span`
  display: flex;
  position: relative;
  top: -0.7rem;
  gap: 0.25rem;
  font-weight: 700;

  p {
    margin: unset;
    font-size: 0.625rem;
    padding: 0.25rem 0.5rem;
    color: ${(props) => props.theme['yellow-dark']};

    border-radius: 100px;
    background-color: ${(props) => props.theme['yellow-light']};
  }
`

export const CoffeeFooterContainer = styled.footer`
  display: flex;
  width: 13rem;
  height: 2.375rem;
  margin: 2.0625rem 1.25rem 1.5rem;

  gap: 1.4375rem;
`

export const CoffeePriceContainer = styled.span`
  display: flex;
  align-items: baseline;
  width: 4.1875rem;

  p {
    margin: 0.1rem;
    color: ${(props) => props.theme['base-text']};

    &:last-child {
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      font-size: 1.5rem;
    }
  }
`

export const CoffeeCountCartContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0.5rem;

  width: 7.375rem;
  height: 2.375rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: unset;

    width: 4.5rem;
    height: 2.375rem;

    border-radius: 6px;
    background-color: ${(props) => props.theme['base-button']};

    p {
      width: 1.25rem;
      height: 1.3125rem;
      margin: 0.5rem 0.25rem;
      line-height: 140%;

      font-size: 1rem;
      color: ${(props) => props.theme['base-title']};
    }

    button {
      display: flex;
      border: none;
      background-color: transparent;
      color: ${(props) => props.theme.purple};

      cursor: pointer;
    }
  }
`

export const CoffeeShopingCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  width: 2.375rem;
  height: 2.375rem;

  border-radius: 6px;

  transition: background-color 0.2s;
  background-color: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`
