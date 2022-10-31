import { useEffect, useState } from "react"
import { getAllLists, addNewList, deleteListByID, ListType } from "../../../storage/lists"

const useLists = () => {
  const [useNewListName, setNewListName] = useState<string>('')
  const [useHerosLists, setHerosLists] = useState<ListType[]>([])
  const [useSelectedList, setSelectedList] = useState<number|undefined>(undefined)
  const [useHeroDetails, setHeroDetails] = useState<string>('')

  const getHeroLists = () => {
    const lists = getAllLists()

    setHerosLists(lists)

    lists[0]?.id && setSelectedList(lists[0].id)
  }

  const createNewList = () => {
    if (!useNewListName) return

    const listData = {
      id: new Date().getTime(),
      name: useNewListName,
      heros: []
    }

    const newLists = addNewList(listData)
    
    setNewListName('')
    setHerosLists(newLists)
  }

  const deleteList = () => {
    if (!useSelectedList) return

    const newLists = deleteListByID(useSelectedList)

    setHerosLists(newLists)
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