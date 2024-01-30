import styled from 'styled-components'

export const PaymentOptionContainer = styled.div`
  display: flex;
  padding: 1rem;
  gap: 0.75rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};

  text-transform: uppercase;
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};
  border: 1px solid ${(props) => props.theme['base-button']};
  transition: 0.2s;
  user-select: none;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`
