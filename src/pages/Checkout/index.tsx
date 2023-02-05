import {
  CheckoutContainer,
  ConfirmOrderContainer,
  FormContainer,
  PaymentContainer,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>

        <FormContainer>
          <p>Endereço de entrega</p>
        </FormContainer>

        <PaymentContainer>
          <p>$ Pagamento</p>
        </PaymentContainer>
      </div>
      <div>
        <h2>Cafés selecionados</h2>

        <ConfirmOrderContainer>
          <p>Total</p>
        </ConfirmOrderContainer>
      </div>
    </CheckoutContainer>
  )
}
