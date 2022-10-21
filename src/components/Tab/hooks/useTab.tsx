import { useState } from "react"

type UseTabDataProps = {
  label: string
  value: string | number
}

const useTab = (data: UseTabDataProps[]) => {
  const [selected, setSelected] = useState<string|number>(data[0]?.value)

  return {
    selected,
    setSelected
  }
}

export { useTab }