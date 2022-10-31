import {
  Button,
  Header,
  Input,
  MainContainer,
  Select,
  HeroCard,
  ModalHeroDetails
} from "../../components"

import {
  ActionsContent,
  HeroListContainer,
  NoHerosText
} from "./styles"

import { GoPlus, GoTrashcan } from "react-icons/go"
import { IoRefreshSharp } from 'react-icons/io5'

import { useLists } from "./hooks/useLists"

const Lists = () => {

  const { 
    useNewListName,
    setNewListName,
    createNewList,
    useHerosLists,
    useSelectedList,
    setSelectedList,
    deleteList,
    useHeroDetails,
    setHeroDetails,
    getHeroLists
  } = useLists()

  return (
    <>
      <Header />
      <MainContainer>
        <ActionsContent>
          <Input
            label="Create a new list:"
            placeholder="List name"
            value={useNewListName}
            onChange={({ currentTarget }) => setNewListName(currentTarget.value)}
          />

          <Button onClick={createNewList}>
            <GoPlus />
          </Button>
        </ActionsContent>

        <ActionsContent>
          <Select
            label="Your lists:"
            disabled={!useHerosLists.length}
            value={useSelectedList}
            onChange={({ currentTarget }) => setSelectedList(parseInt(currentTarget.value))}
          >
            {useHerosLists.map(({ id, name }) => (
              <option key={`op_${id}`} value={id}>{name}</option>
            ))}

            {!useHerosLists.length && (
              <option>no list found, register a new list</option>
            )}
          </Select>

          <Button color="red_600" disabled={!useHerosLists.length} onClick={deleteList}>
            <GoTrashcan />
          </Button>

          <Button disabled={!useHerosLists.length} onClick={getHeroLists}>
            <IoRefreshSharp />
          </Button>
        </ActionsContent>

        {useHerosLists.map(list => (
          <HeroListContainer key={`lists_${list.id}`} show={list.id === useSelectedList}>
            {(list.heros.map(hero => (
              <HeroCard
                key={`lists_${list.id}_${hero.id}`}
                id={hero.id}
                image={hero.image}
                name={hero.name}
                onClick={() => setHeroDetails(hero.id)}
              />
            )))}

            {!list.heros.length && (
              <NoHerosText>No hero was found</NoHerosText>
            )}
          </HeroListContainer>
        ))}

      </MainContainer>
      <ModalHeroDetails id={useHeroDetails} show={!!useHeroDetails} onClose={() => setHeroDetails('')} />
    </>
  )
}

export default Lists