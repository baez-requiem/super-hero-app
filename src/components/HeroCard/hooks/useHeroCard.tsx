import { useEffect, useState } from "react"

type Hero = {
  id: string
  name: string
  image: string
}

type Lists = {
  id: number
  name: string
  heros: Hero[]
}

const useHeroCard = () => {
  const [useShowList, setShowList] = useState<boolean|null>(null)
  const [useLists, setLists] = useState<Lists[]>([])

  const getHeroLists = () => {
    const listJSON = localStorage.getItem('lists')
  
    const list: Lists[] = listJSON ? JSON.parse(listJSON) : []

    setLists(list)
  }

  const toggleHeroList = (
      idList: number,
      { id: idHero, name, image }: Hero
    ) => {
    const cloneLists = [...useLists]

    const idx = cloneLists.findIndex(list => list.id === idList)

    const hasHero = cloneLists[idx].heros.some(hero => hero.id === idHero)

    hasHero
      ? cloneLists[idx].heros = cloneLists[idx].heros.filter(hero => hero.id !== idHero)
      : cloneLists[idx].heros.push({
        id: idHero,
        name,
        image
      })

    setLists(cloneLists)

    localStorage.setItem('lists', JSON.stringify(cloneLists))
  }

  useEffect(() => {
    useShowList && getHeroLists()
  }, [useShowList])

  return {
    useShowList,
    setShowList,
    useLists,
    toggleHeroList
  }
}

export { useHeroCard }