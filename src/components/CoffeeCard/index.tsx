import { CoffeeCardContainer, CoffeeCategories, FormContainer } from './styles'
import expresso from '../../assets/coffees/expresso.svg'
import { ShoppingCart } from 'phosphor-react'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={expresso} alt="" />

      <CoffeeCategories>
        <span>Tradicional</span>
        <span>Com leite</span>
        <span>Especial</span>
      </CoffeeCategories>

      <h2>Expresso Tradicional</h2>

      <p>O tradicional café feito com água quente e grãos moídos</p>

      <FormContainer>
        <label>9,90</label>
        <input type="number" min={0} placeholder="0" />

        <button>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </FormContainer>
    </CoffeeCardContainer>
  )
}
