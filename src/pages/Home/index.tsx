import { Header, HeroCard, MainContainer, ModalHeroDetails, SearchInput } from "../../components"
import { useHome } from "./hooks/useHome"
import { HeroButtonContainer, HeroListContainer, LoadMoreButton, InputContainer, InputContent, NoHerosText } from "./styles"

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
          {hasLoadMore && (
            <LoadMoreButton onClick={loadMore}>Load more</LoadMoreButton>
          )}
        </HeroButtonContainer>

      </MainContainer>
    </>
  )
}

export default Home