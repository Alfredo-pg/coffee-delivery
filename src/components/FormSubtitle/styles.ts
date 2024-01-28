import styled from 'styled-components'

const ICON_COLORS = {
  'yellow-dark': 'yellow-dark',
  purple: 'purple',
} as const

interface IconColorProps {
  $variant: 'yellow-dark' | 'purple'
}

export const FormSubtitleContainer = styled.div<IconColorProps>`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme[ICON_COLORS[props.$variant]]};
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
  }
`
