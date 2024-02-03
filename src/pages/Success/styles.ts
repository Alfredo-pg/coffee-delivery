import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  margin-top: 5rem;
  gap: 6.375rem;
  align-items: end;

  img {
    margin-bottom: -0.7rem;
  }
`

export const TittleContainer = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const InfosContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-width: 32.875rem;
  margin-top: 2.5rem;
  gap: 2rem;
  padding: 2.5rem;
  position: relative;
  border-radius: 6px 36px;
  background: ${(props) => props.theme.background};

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`
