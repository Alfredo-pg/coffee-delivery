import { HomeContainer, SpansContainer, TextContainer } from './styles'

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import cafeGigante from '../../assets/cafe-gigante.svg'

export function Home() {
  return (
    <HomeContainer>
      <TextContainer>
        <div className="title">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>

        <SpansContainer>
          <div>
            <span className="cart">
              <ShoppingCart size={16} weight="fill" />
            </span>
            <p>Compra simples e segura</p>
          </div>
          <div>
            <span className="package">
              <Package size={16} weight="fill" />
            </span>
            <p>Embalagem mantém o café intacto</p>
          </div>
          <div>
            <span className="timer">
              <Timer size={16} weight="fill" />
            </span>
            <p>Entrega rápida e rastreada</p>
          </div>
          <div>
            <span className="coffee">
              <Coffee size={16} weight="fill" />
            </span>
            <p>O café chega fresquinho até você</p>
          </div>
        </SpansContainer>
      </TextContainer>

      <img src={cafeGigante} alt="um grande copo de café com grãos ao redor" />
    </HomeContainer>
  )
}
