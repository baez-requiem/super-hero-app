import { SyntheticEvent } from "react"
import { OpenListButton, CardContainer, HeroImageContent, HeroNameContent, ListContainer, ListItem, ListItemClose } from "./styles"
import { AiOutlinePlus, AiFillStar, AiOutlineMinus } from 'react-icons/ai'
import { useHeroCard } from "./hooks/useHeroCard"

type HeroCardProps = {
  id: string
  name: string
  image: string
  onClick: () => void,
}

const HeroCard = ({ id, image, name, onClick }: HeroCardProps) => {

  const {
    useShowList,
    setShowList,
    useLists,
    toggleHeroList
  } = useHeroCard()

  return (
    <CardContainer>
      <HeroImageContent>
        <img
          src={image}
          alt={name}
          onClick={onClick}
          onError={(e: SyntheticEvent<HTMLImageElement, Event>) => {
            e.currentTarget.src = "/no-picture-icon.webp"
          }}
        />

        <OpenListButton onClick={() => setShowList(true)}>
          <AiOutlinePlus />
        </OpenListButton>

        <ListContainer show={useShowList}>
          <ListItemClose onClick={() => setShowList(false)}>
            <AiOutlineMinus />
          </ListItemClose>

          {useLists.map(list => (
            <ListItem key={`li_${id}_${list.id}`} active={list.heros.some(hero => hero.id === id)}>
              <span>{list.name}</span>
              <div>
                <AiFillStar size={22} onClick={() => toggleHeroList(list.id, { id, name, image })} />
              </div>
            </ListItem>
          ))}

          {!useLists.length && (
            <ListItem>no list found, register a new list</ListItem>
          )}
        </ListContainer>
      </HeroImageContent>
      <HeroNameContent onClick={onClick}>
        <h3>{name}</h3>
      </HeroNameContent>
    </CardContainer>
  )
}

export default HeroCard