import axios from "axios"

const mainURL = 'https://superheroapi.com/api.php/'
const token = '1223746461506345'

export const superHeroApi = axios.create({
  baseURL: `${mainURL}${token}`
})

export const getHerosByRange = async (start: number, end: number): Promise<HeroType[]> => {
  const range = end - start + 1

  const heroIDs = new Array(range).fill(null).map((_, i) => i + start)

  const result = await Promise.all(heroIDs.map(async id => {
    const { data } = await superHeroApi.get(`/${id}`)

    return data
  }))

  return result
}

export const getHeroByID = async (id: string): Promise<HeroType> => {
  const { data } = await superHeroApi.get(`/${id}`)

  return data
}

export const getHerosByID = async (ids: string[]): Promise<HeroType[]> => {
  const result = await Promise.all(ids.map(async id => {
    const { data } = await superHeroApi.get(`/${id}`)

    return data
  }))

  return result
}

export const getHerosByName = async (name: string): Promise<HeroType[]> => {
  const { data } = await superHeroApi.get(`/search/${name}`)

  return data?.results || []
}

export type HeroType = {
  id: string
  name: string

  powerstats: {
    intelligence: string
    strength: string
    speed: string
    durability: string
    power: string
    combat: string
  }

  biography: {
    "full-name": string
    "alter-egos": string
    aliases: string[]
    "place-of-birth": string
    "first-appearance": string
    publisher: string
    alignment: string
  }

  appearance: {
    gender: string
    race: string
    height: string[],
    weight: string[],
    "eye-color": string
    "hair-color": string
  },

  connections: {
    "group-affiliation": string
    relatives: string
  }

  image: {
    url: string
  }
}