import { MapPinLine } from 'phosphor-react'
import { AddressContainer, CheckoutFormContainer } from './styles'
import { FormSubtitle } from '../../components/FormSubtitle'

export function Checkout() {
  return (
    <CheckoutFormContainer>
      <section>
        <h1>Complete seu pedido</h1>

        <AddressContainer>
          <header>
            <MapPinLine size={22} />
            <FormSubtitle />
          </header>

          <input type="text" placeholder="CEP" />
          <input type="text" placeholder="Rua" />
          <input type="text" placeholder="Número" />
          <input type="text" placeholder="Complemento" />
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="UF" />
        </AddressContainer>

        <div>
          <h2>Pagamento</h2>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar.
          </p>
        </div>
      </section>

      <section>
        <h1>Cafés selecionados</h1>
      </section>
    </CheckoutFormContainer>
  )
}
