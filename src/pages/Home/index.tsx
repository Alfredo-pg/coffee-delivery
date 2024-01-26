import { CoffeeCard } from '../../components/CoffeeCard'
import { Intro } from './components/Intro'
import { HomeCoffeeContainer } from './styles'

export function Home() {
  return (
    <>
      <Intro />

      <HomeCoffeeContainer>
        <h1>Nossos cafés</h1>

        <main>
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </main>
      </HomeCoffeeContainer>
    </>
  )
}
