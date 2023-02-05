import { CoffeeCard } from '../../components/CoffeeCard'
import { Hero } from '../../components/Hero'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <>
      <Hero />
      <HomeContainer>
        <h2>Nossos cafés</h2>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </HomeContainer>
    </>
  )
}
