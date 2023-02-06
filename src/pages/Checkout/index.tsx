import { CreditCard, CurrencyDollar, MapPinLine } from 'phosphor-react'
import {
  CheckoutContainer,
  ConfirmOrderContainer,
  FormContainer,
  FormHeaderContainer,
  FormMainContainer,
  PaymentCardContainer,
  PaymentContainer,
  PaymentHeaderContainer,
  PaymentOptionsContainer,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>

        <FormContainer>
          <FormHeaderContainer>
            <p>
              <MapPinLine size={22} />
            </p>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja recebeu seu pedido</p>
          </FormHeaderContainer>

          <FormMainContainer>
            <input type="number" id="cep" placeholder="CEP" />
            <input type="text" id="rua" placeholder="Rua" />
            <input type="number" id="numero" placeholder="Número" />
            <input type="text" id="complemento" placeholder="Complemento" />
            <input type="text" id="bairro" placeholder="Bairro" />
            <input type="text" id="cidade" placeholder="Cidade" />
            <input type="text" id="uf" placeholder="UF" />
          </FormMainContainer>
        </FormContainer>

        <PaymentContainer>
          {/* =-==-==-==-==-==-==-==-==-==-= COMPONENTIZAR =-==-==-==-==-==-==-==-==-==-= */}
          <PaymentHeaderContainer>
            <p>
              <CurrencyDollar size={22} />
            </p>
            <h3>Pagamento</h3>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deja pagar
            </p>
          </PaymentHeaderContainer>
          {/* =-==-==-==-==-==-==-==-==-==-= COMPONENTIZAR =-==-==-==-==-==-==-==-==-==-= */}

          <PaymentOptionsContainer>
            <PaymentCardContainer>
              <span>
                <CreditCard size={16} />
              </span>
              <p>CARTÃO DE CRÉDITO</p>
            </PaymentCardContainer>
          </PaymentOptionsContainer>
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
