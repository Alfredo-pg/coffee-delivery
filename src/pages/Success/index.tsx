import deliverySVG from '../../assets/delivery-success.svg'
import { InfosContainer, SuccessContainer, TittleContainer } from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <div>
        <TittleContainer>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </TittleContainer>

        <InfosContainer>
          <div>
            <h2>Entrega em Rua Joao Daniel Martinelli, 102</h2>
            <p>Farrapos - Porto Alegre, RS</p>
          </div>
          <div>
            <h2>Previsão de entrega</h2>
            <p>20 min - 30 min</p>
          </div>
          <div>
            <h2>Pagamento na entrega</h2>
            <p>Cartão de Crédito</p>
          </div>
        </InfosContainer>
      </div>

      <img src={deliverySVG} alt="" />
    </SuccessContainer>
  )
}
