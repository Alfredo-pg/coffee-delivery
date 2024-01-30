import CoffeBackground from '../../../../assets/coffee-background.svg'
import { IntroIcon } from '../IntroIcon'

import {
  IconsContainer,
  IntroContainer,
  IntroText,
  IntroTextContainer,
} from './styles'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Intro() {
  return (
    <IntroContainer>
      <IntroTextContainer>
        <IntroText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </IntroText>

        <IconsContainer>
          <IntroIcon
            icon={<ShoppingCart size={16} weight="fill" />}
            variant="yellow-dark"
            text="Compra simples e segura"
          />
          <IntroIcon
            icon={<Package size={16} weight="fill" />}
            variant="gray"
            text="Embalagem mantém o café intacto"
          />
          <IntroIcon
            icon={<Timer size={16} weight="fill" />}
            variant="yellow"
            text="Entrega rápida e rastreada"
          />
          <IntroIcon
            icon={<Coffee size={16} weight="fill" />}
            variant="purple"
            text="O café chega fresquinho até você"
          />
        </IconsContainer>
      </IntroTextContainer>

      <img src={CoffeBackground} alt="" />
    </IntroContainer>
  )
}
