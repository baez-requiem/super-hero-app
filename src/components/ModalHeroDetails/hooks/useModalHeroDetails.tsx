import { useEffect, useState } from "react"
import { getHeroByID, HeroType } from "../../../api/superhero"

interface useModalHeroDetailsProps {
  id?: string
  show: boolean
}

const useModalHeroDetails = ({ id, show }: useModalHeroDetailsProps) => {
  const [useHeroData, setHeroData] = useState<HeroType|null>(null)

  const loadHeroData = async () => {
    if (!show || !id) return

    const data = await getHeroByID(id)

    setHeroData(data)
  }

  useEffect(() => {
    loadHeroData()

  }, [show])

  return {
    useHeroData
  }
}

export { useModalHeroDetails }