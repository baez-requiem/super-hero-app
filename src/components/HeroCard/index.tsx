import { AiOutlinePlus, AiFillStar, AiOutlineMinus } from 'react-icons/ai'
import {
  OpenListButton,
  CardContainer,
  HeroImageContent,
  HeroNameContent,
  ListContainer,
  ListItem,
  ListItemClose
} from "./styles"

import { useHeroCard } from "./hooks/useHeroCard"

import { onImageError } from "../../utils"

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
    toggleHero
  } = useHeroCard()

  return (
    <CardContainer>
      <HeroImageContent>
        <img
          src={image}
          alt={name}
          onClick={onClick}
          onError={onImageError}
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
                <AiFillStar size={22} onClick={() => toggleHero(list.id, { id, name, image })} />
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