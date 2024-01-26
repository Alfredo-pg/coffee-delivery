import styled from 'styled-components'

export const HomeCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 3.38rem;

  h1 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 2rem;
  }

  main {
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem 2rem;
  }
`
