export type HeroType = {
  id: string
  name: string
  image: string
}

export type ListType = {
  id: number
  name: string
  heros: HeroType[]
}

const itemKey = 'lists'

export const getAllLists = (): ListType[] => {
  const listsJSON = localStorage.getItem(itemKey)

  const lists = listsJSON ? JSON.parse(listsJSON) : []

  return lists
}

export const toggleHeroInList = (
  idList: number,
  { id: idHero, name, image }: HeroType
): ListType[] => {
  const lists = getAllLists()

  const idx = lists.findIndex(list => list.id === idList)

  const hasHero = lists[idx].heros.some(hero => hero.id === idHero)

  hasHero
    ? lists[idx].heros = lists[idx].heros.filter(hero => hero.id !== idHero)
    : lists[idx].heros.push({
      id: idHero,
      name,
      image
    })

  localStorage.setItem(itemKey, JSON.stringify(lists))

  return lists
}

export const addNewList = (data: ListType): ListType[] => {
  const lists = getAllLists()

  const newLists = [...lists, data]

  localStorage.setItem(itemKey, JSON.stringify(newLists))

  return newLists
}

export const deleteListByID = (id: number): ListType[] => {
  const lists = getAllLists()

  const newLists = lists.filter(list => list.id !== id)

  localStorage.setItem(itemKey, JSON.stringify(newLists))

  return newLists
}