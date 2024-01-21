import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import CoffeBackground from '../../assets/coffee-background.svg'
import {
  IconsContainer,
  IntroContainer,
  IntroText,
  IntroTextContainer,
} from './styles'

export function Home() {
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
          <div>
            <span>
              <ShoppingCart size={16} weight="fill" />
            </span>
            <p>Compra simples e segura</p>
          </div>
          <div>
            <span>
              <Package size={16} weight="fill" />
            </span>
            <p>Embalagem mantém o café intacto</p>
          </div>
          <div>
            <span>
              <Timer size={16} weight="fill" />
            </span>
            <p>Entrega rápida e rastreada</p>
          </div>
          <div>
            <span>
              <Coffee size={16} weight="fill" />
            </span>
            <p>O café chega fresquinho até você</p>
          </div>
        </IconsContainer>
      </IntroTextContainer>

      <img src={CoffeBackground} alt="" />
    </IntroContainer>
  )
}
