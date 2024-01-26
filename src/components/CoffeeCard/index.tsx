import {
  CoffeeCardContainer,
  CoffeeCategories,
  FooterContainer,
} from './styles'
import expresso from '../../assets/coffees/expresso.svg'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={expresso} alt="" />

      <CoffeeCategories>
        <span>Tradicional</span>
        <span>Com leite</span>
        <span>Especial</span>
      </CoffeeCategories>

      <h1>Expresso Tradicional</h1>

      <p>O tradicional café feito com água quente e grãos moídos</p>

      <FooterContainer>
        <p>R$ 9,90</p>
      </FooterContainer>
    </CoffeeCardContainer>
  )
}
