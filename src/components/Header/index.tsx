import {
  ActionContainer,
  HeaderContainer,
  MapPinContainer,
  ShoppingCartContainer,
} from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import CoffeeLogo from '../../assets/coffee-logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to={'/'}>
        <img src={CoffeeLogo} alt="" />
      </NavLink>

      <ActionContainer>
        <MapPinContainer>
          <MapPin size={22} weight="fill" />
          <p>Iturama, MG</p>
        </MapPinContainer>

        <NavLink to={'/checkout'}>
          <ShoppingCartContainer>
            <ShoppingCart size={22} weight="fill" />
            <span>3</span>
          </ShoppingCartContainer>
        </NavLink>
      </ActionContainer>
    </HeaderContainer>
  )
}
