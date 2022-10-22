import { useEffect, useState } from "react"
import { getHerosByID } from "../../../api/superhero"

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

const useLists = () => {
  const [useNewListName, setNewListName] = useState<string>('')
  const [useHerosLists, setHerosLists] = useState<Lists[]>([])
  const [useSelectedList, setSelectedList] = useState<number|undefined>(undefined)
  const [useHeroDetails, setHeroDetails] = useState<string>('')

  const getHeroLists = () => {
    const listJSON = localStorage.getItem('lists')
  
    const list: Lists[] = listJSON ? JSON.parse(listJSON) : []

    setHerosLists(list)

    list[0]?.id && setSelectedList(list[0].id)
  }

  const createNewList = () => {
    if (!useNewListName) return

    const listData = {
      id: new Date().getTime(),
      name: useNewListName,
      heros: []
    }

    const newLists = [...useHerosLists, listData]
    
    setHerosLists(newLists)

    localStorage.setItem('lists', JSON.stringify(newLists))

    setNewListName('')
  }

  const deleteList = () => {
    if (!useSelectedList) return

    const newLists = useHerosLists.filter(list => list.id !== useSelectedList)

    setHerosLists(newLists)

    localStorage.setItem('lists', JSON.stringify(newLists))

    setSelectedList(newLists[0]?.id || undefined)
  }

  useEffect(() => {
    getHeroLists()
  }, [])

  return {
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
  }
}

export { useLists }