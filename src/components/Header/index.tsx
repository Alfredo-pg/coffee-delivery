import { HeaderContainer } from './styles'

import logoCoffee from '../../assets/logo-coffee.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffee} alt="" />
      </NavLink>
      <nav>
        <div className="map">
          <MapPin size={22} weight="fill" className="pin" />
          Iturama, MG
        </div>
        <NavLink to="/checkout" className="shopping">
          <ShoppingCart size={22} weight="fill" />
          <span>1</span>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
