import { FormAddress } from './FormAddress'
import { Payment } from './Payment'
import { CheckoutFormContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutFormContainer>
      <section>
        <h1>Complete seu pedido</h1>
        <FormAddress />

        <Payment />
      </section>

      <section>
        <h1>Cafés selecionados</h1>
      </section>
    </CheckoutFormContainer>
  )
}
