import styled from 'styled-components'

const BACKGROUND_COLORS = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

interface IntroIconProps {
  $variant: 'yellow-dark' | 'yellow' | 'gray' | 'purple'
}

export const IconContainer = styled.div<IntroIconProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    background: ${(props) => props.theme[BACKGROUND_COLORS[props.$variant]]};
    color: ${(props) => props.theme.background};
  }
`
