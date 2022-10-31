import { SyntheticEvent } from "react"

export const onImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.src = "/no-picture-icon.webp"
}