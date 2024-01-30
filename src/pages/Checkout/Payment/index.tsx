import { CreditCard, CurrencyDollar } from 'phosphor-react'
import { PaymentContainer } from './styles'
import { FormSubtitle } from '../FormSubtitle'
import { PaymentOption } from '../PaymentOption'

export function Payment() {
  return (
    <PaymentContainer>
      <FormSubtitle
        icon={<CurrencyDollar size={22} />}
        variant="purple"
        titulo="Pagamento"
        descricao="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      />

      <footer>
        <PaymentOption
          icon={<CreditCard size={16} />}
          text="cartão de crédito"
        />
        <PaymentOption
          icon={<CreditCard size={16} />}
          text="cartão de crédito"
        />
        <PaymentOption
          icon={<CreditCard size={16} />}
          text="cartão de crédito"
        />
      </footer>
    </PaymentContainer>
  )
}
