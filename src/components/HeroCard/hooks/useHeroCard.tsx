import { useEffect, useState } from "react"

import { getAllLists, toggleHeroInList, HeroType, ListType } from "../../../storage/lists"

const useHeroCard = () => {
  const [useShowList, setShowList] = useState<boolean|null>(null)
  const [useLists, setLists] = useState<ListType[]>([])

  const getHeroLists = () => {
    const lists = getAllLists()

    setLists(lists)
  }

  const toggleHero = (idList: number, hero: HeroType) => {
    const updatedLists = toggleHeroInList(idList, hero)

    setLists(updatedLists)
  }

  useEffect(() => {
    useShowList && getHeroLists()
  }, [useShowList])

  return {
    useShowList,
    setShowList,
    useLists,
    toggleHero
  }
}

export { useHeroCard }