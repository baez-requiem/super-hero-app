import { useEffect, useState } from "react"

type Lists = {
  id: number
  name: string
  heros: string[]
  createdAt: string
}

const useHeroCard = () => {
  const [useShowList, setShowList] = useState<boolean|null>(null)
  const [useLists, setLists] = useState<Lists[]>([])

  const getHeroLists = () => {
    const listJSON = localStorage.getItem('lists')
  
    const list: Lists[] = listJSON ? JSON.parse(listJSON) : []

    setLists(list)
  }

  const toggleHeroList = (idList: number, idHero: string) => {
    const cloneLists = [...useLists]

    const idx = cloneLists.findIndex(list => list.id === idList)

    const hasHero = cloneLists[idx].heros.includes(idHero)

    hasHero
      ? cloneLists[idx].heros = cloneLists[idx].heros.filter(id => id !== idHero)
      : cloneLists[idx].heros.push(idHero)

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