import { MapPinLine } from 'phosphor-react'
import { FormSubtitle } from '../../../components/FormSubtitle'
import { FormAddressContainer, InputsContainer } from './styles'

export function FormAddress() {
  return (
    <FormAddressContainer>
      <FormSubtitle
        icon={<MapPinLine size={22} />}
        variant="yellow-dark"
        titulo="Endereço de Entrega"
        descricao="Informe o endereço onde deseja receber seu pedido"
      />

      <InputsContainer>
        <input type="text" placeholder="CEP" />
        <input type="text" placeholder="Rua" />
        <input type="text" placeholder="Número" />
        <input type="text" placeholder="Complemento Opcional" />
        <input type="text" placeholder="Bairro" />
        <input type="text" placeholder="Cidade" />
        <input type="text" placeholder="UF" />
      </InputsContainer>
    </FormAddressContainer>
  )
}
