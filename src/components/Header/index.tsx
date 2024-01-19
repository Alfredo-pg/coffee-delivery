import {
  ActionContainer,
  HeaderContainer,
  MapPinContainer,
  ShoppingCartContainer,
} from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import CoffeeLogo from '../../assets/coffee-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={CoffeeLogo} alt="" />

      <ActionContainer>
        <MapPinContainer>
          <MapPin size={22} weight="fill" />
          <p>Iturama, MG</p>
        </MapPinContainer>

        <ShoppingCartContainer>
          <ShoppingCart size={22} weight="fill" />
        </ShoppingCartContainer>
      </ActionContainer>
    </HeaderContainer>
  )
}
