import { styled } from 'styled-components'

export const FormAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.94rem;
  gap: 2rem;
  border-radius: 6px;
  width: 40rem;
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
`

export const InputsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 0.75rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};

  ::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  input {
    padding: 0.75rem;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme['base-button']};
    background: ${(props) => props.theme['base-input']};
  }

  input:nth-child(odd) {
    width: 12.5rem;
  }

  input:nth-child(2) {
    width: 100%;
  }

  input:nth-child(4) {
    display: flex;
    flex: 1;
  }

  input:nth-child(6) {
    display: flex;
    flex: 1;
  }

  input:last-child {
    width: 3.75rem;
  }
`
