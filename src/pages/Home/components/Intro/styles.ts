import styled from 'styled-components'

import introBackground from '../../../../assets/intro-background.svg'

export const IntroContainer = styled.div`
  display: flex;
  align-items: start;
  background: ${() => `url(${introBackground})`} no-repeat;
  background-size: contain;

  margin-top: 5.75rem;
  gap: 3.5rem;
`

export const IntroTextContainer = styled.header`
  display: flex;
  flex-direction: column;

  gap: 4rem;
`

export const IntroText = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    line-height: 130%;
  }
`

export const IconsContainer = styled.footer`
  display: flex;
  width: 35.4375rem;
  flex-wrap: wrap;

  gap: 1.25rem 2.5rem;

  div:nth-child(odd) {
    width: 14.43rem;
  }
`
