import styled, { css } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: space-between;

  gap: 3.5rem;

  margin: 5.75rem 0;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4.125rem;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  width: 36.75rem;
  height: 12rem;
  gap: 1rem;

  h1 {
    width: 36.75rem;
    height: 7.75rem;

    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 3rem;
    line-height: 3.9rem;

    color: ${(props) => props.theme['base-title']};
  }

  p {
    width: 36.75rem;
    height: 3.25rem;
    font-size: 1.3rem;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const SpansContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem 0.6rem;

  width: 35.4375rem;
  height: 5.25rem;
  color: ${(props) => props.theme['base-text']};

  div {
    display: flex;
    align-items: center;
    min-width: 16rem;

    gap: 0.75rem;
  }
`

interface IconBackgroundStylesProps {
  variant: 'yellow-dark' | 'yellow' | 'base-text' | 'purple'
}

export const IconBackgroundStyles = styled.span<IconBackgroundStylesProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  border-radius: 1000px;

  color: ${(props) => props.theme.background};

  ${(props) => {
    return css`
      background-color: ${defaultTheme[props.variant]};
    `
  }}
`
