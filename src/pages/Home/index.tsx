import { Hero } from '../../components/Hero'
import {
  CoffeeContainer,
  CoffeeCountCartContainer,
  CoffeeDescriptionConainer,
  CoffeeFooterContainer,
  CoffeePriceContainer,
  HomeContainer,
} from './styles'

import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

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

          <CoffeeDescriptionConainer>
            <p>TRADICONAL</p>
          </CoffeeDescriptionConainer>
          <h3>Expresso Tradicional</h3>
          <p>O tradicional café feito com água quente e grãos moídos</p>

          <CoffeeFooterContainer>
            <CoffeePriceContainer>
              <p>R$</p>
              <p>9,90</p>
            </CoffeePriceContainer>

            <CoffeeCountCartContainer>
              <div>
                <button>
                  <Minus size={16} weight="bold" />
                </button>
                <p>1</p>
                <button>
                  <Plus size={16} weight="bold" />
                </button>
              </div>

              <span>
                <ShoppingCartSimple size={22} weight="fill" />
              </span>
            </CoffeeCountCartContainer>
          </CoffeeFooterContainer>
        </CoffeeContainer>

        <CoffeeContainer>
          <img src={cafeAmericano} alt="" />
        </CoffeeContainer>

        <CoffeeContainer>
          <img src={expressoCremoso} alt="" />
        </CoffeeContainer>
        <CoffeeContainer>
          <img src={expressoCremoso} alt="" />
        </CoffeeContainer>
      </HomeContainer>
    </>
  )
}
