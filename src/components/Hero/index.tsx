import {
  HeroContainer,
  IconBackgroundStyles,
  SpansContainer,
  TextContainer,
  Title,
} from './styles'

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import cafeGigante from '../../assets/cafe-gigante.svg'

export function Hero() {
  return (
    <HeroContainer>
      <TextContainer>
        <Title>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </Title>

        <SpansContainer>
          <div>
            <IconBackgroundStyles variant="yellow-dark">
              <ShoppingCart size={16} weight="fill" />
            </IconBackgroundStyles>
            <p>Compra simples e segura</p>
          </div>
          <div>
            <IconBackgroundStyles variant="yellow">
              <Package size={16} weight="fill" />
            </IconBackgroundStyles>
            <p>Embalagem mantém o café intacto</p>
          </div>
          <div>
            <IconBackgroundStyles variant="base-text">
              <Timer size={16} weight="fill" />
            </IconBackgroundStyles>
            <p>Entrega rápida e rastreada</p>
          </div>
          <div>
            <IconBackgroundStyles variant="purple">
              <Coffee size={16} weight="fill" />
            </IconBackgroundStyles>
            <p>O café chega fresquinho até você</p>
          </div>
        </SpansContainer>
      </TextContainer>

      <img src={cafeGigante} alt="um grande copo de café com grãos ao redor" />
    </HeroContainer>
  )
}
