import { Hero } from '../../components/Hero'
import { CoffeeContainer, HomeContainer } from './styles'

import { ShoppingCartSimple } from 'phosphor-react'

import cafeExpresso from '../../assets/cafe-expresso.svg'
import cafeAmericano from '../../assets/cafe-americano.svg'
import expressoCremoso from '../../assets/cafe-expresso-cremoso.svg'

export function Home() {
  return (
    <>
      <Hero />
      <HomeContainer>
        <h2>Nossos cafés</h2>

        <CoffeeContainer>
          <img src={cafeExpresso} alt="" />

          <span>Tradicional</span>
          <h3>Expresso Tradicional</h3>
          <p>O tradicional café feito com água quente e grãos moídos</p>

          <footer>
            <p>R$9,90</p>
            <div>
              <span>- 1 +</span>
              <span>
                <ShoppingCartSimple size={22} weight="fill" />
              </span>
            </div>
          </footer>
        </CoffeeContainer>

        <CoffeeContainer>
          <img src={cafeAmericano} alt="" />
        </CoffeeContainer>

        <CoffeeContainer>
          <img src={expressoCremoso} alt="" />
        </CoffeeContainer>
      </HomeContainer>
    </>
  )
}
