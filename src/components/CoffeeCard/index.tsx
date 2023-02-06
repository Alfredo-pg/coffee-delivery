import {
  CoffeeContainer,
  CoffeeCountCartContainer,
  CoffeeDescriptionConainer,
  CoffeeFooterContainer,
  CoffeePriceContainer,
  CoffeeShopingCartButton,
} from './styles'

import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

import cafeExpresso from '../../assets/cafe-expresso.svg'

export function CoffeeCard() {
  return (
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

          <CoffeeShopingCartButton>
            <ShoppingCartSimple size={22} weight="fill" />
          </CoffeeShopingCartButton>
        </CoffeeCountCartContainer>
      </CoffeeFooterContainer>
    </CoffeeContainer>
  )
}
