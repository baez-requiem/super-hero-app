import { useEffect, useState } from "react"
import { getHerosByRange, HeroType, getHerosByName } from "../../../api/superhero"

const limitHeros = 731

type Lists = {
  id: number
  name: string
  heros: string[]
  createdAt: string
}

const useHome = () => {
  const [useRange, setRange] = useState<number>(0)
  const [useHeros, setHeros] = useState<HeroType[]>([])
  const [useHeroDetails, setHeroDetails] = useState<string>('')
  const [useHeroSearchText, setHeroSearchText] = useState<string>('')

  const loadMore = async () => {
    const start = useRange + 1
    const end = useRange + 8

    setRange(end > limitHeros ? limitHeros : end)

    const data = await getHerosByRange(start, end)

    setHeros([...useHeros, ...data])
  }

  const searchHeros = async (name: string) => {
    if (!name.length) {
      setHeroSearchText('')
      setHeros([])
      setRange(0)

      loadMore()

      return
    }

    setHeroSearchText(name)

    const data = await getHerosByName(name)

    setHeros(data)
  }

  useEffect(() => {
    loadMore()
  }, [])

  const hasLoadMore = !useHeroSearchText && useRange < 731 && useHeros.length

  return {
    useHeros,
    loadMore,
    setHeroDetails,
    useHeroDetails,
    searchHeros,
    hasLoadMore
  }
}

export { useHome }