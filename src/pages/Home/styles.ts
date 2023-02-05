import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-wrap: wrap;

  gap: 2.5rem 2rem;

  h2 {
    display: flex;
    width: 100%;

    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
    line-height: 2.6rem;
    color: ${(props) => props.theme['base-subtitle']};

    margin-top: 2rem;
    margin-bottom: 1.15rem;
  }
`
