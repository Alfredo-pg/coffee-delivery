import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  nav {
    display: flex;
    gap: 0.75rem;

    a,
    div {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 2.375rem;
      border-radius: 6px;
      padding: 0.5rem;

      cursor: pointer;
    }

    .map {
      background-color: ${(props) => props.theme['purple-light']};
      font-size: 0.875rem;
      color: ${(props) => props.theme['purple-dark']};
      gap: 0.25rem;

      .pin {
        color: ${(props) => props.theme.purple};
      }
    }

    .shopping {
      background-color: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`
