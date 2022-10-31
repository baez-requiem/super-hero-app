import { 
  Header,
  HeroCard,
  MainContainer,
  ModalHeroDetails,
  SearchInput
} from "../../components"

import {
  HeroButtonContainer,
  HeroListContainer,
  LoadMoreButton,
  InputContainer,
  NoHerosText
} from "./styles"

import { useHome } from "./hooks/useHome"

const Home = () => {

  const {
    useHeros,
    loadMore,
    setHeroDetails,
    useHeroDetails,
    searchHeros,
    hasLoadMore
  } = useHome()

  return (
    <>
      <ModalHeroDetails id={useHeroDetails} show={!!useHeroDetails} onClose={() => setHeroDetails('')} />
      <Header />
      <MainContainer>

        <InputContainer>
          <SearchInput onClick={searchHeros} />
        </InputContainer>
      
        <HeroListContainer>
          {useHeros.map((hero, i) => (
            <HeroCard
              key={hero.id}
              name={hero.name}
              id={hero.id}
              image={hero.image?.url}
              onClick={() => setHeroDetails(hero.id)}
            />
          ))}

          {!useHeros.length && (
            <NoHerosText>No hero was found</NoHerosText>
          )}

        </HeroListContainer>
        
        <HeroButtonContainer>
          {hasLoadMore ? (
            <LoadMoreButton onClick={loadMore}>Load more</LoadMoreButton>
          ) : null}
        </HeroButtonContainer>

      </MainContainer>
    </>
  )
}

export default Home