import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    cursor: pointer;
  }
`

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const MapPinContainer = styled.button`
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  border-radius: 6px;
  height: 2.4rem;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const ShoppingCartContainer = styled.button`
  display: flex;
  position: relative;
  width: 2.4rem;
  height: 2.4rem;

  background: ${(props) => props.theme['yellow-light']};
  cursor: pointer;
  border-radius: 6px;

  padding: 0.5rem;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    width: 1.25rem;
    height: 1.25rem;

    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    font-size: 0.75rem;
    font-weight: 700;
    border-radius: 50%;
  }
`
