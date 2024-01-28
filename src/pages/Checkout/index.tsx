import { FormAddress } from './FormAddress'
import { CheckoutFormContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutFormContainer>
      <section>
        <h1>Complete seu pedido</h1>
        <FormAddress />

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
