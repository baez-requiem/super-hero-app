import { InputContent, StyledInput } from "./styles"

import { GoSearch } from 'react-icons/go'
import { useState } from "react"

type SearchInputProps = {
  onClick: (arg0: string ) => void
}

const SearchInput = ({ onClick }: SearchInputProps) => {
  const [useText, setText] = useState<string>('')

  return (
    <InputContent>
      <StyledInput
        value={useText}
        onChange={({ currentTarget }) => setText(currentTarget.value) }
        onKeyDown={e => e.code === 'Enter' && onClick(useText)}
      />
      <GoSearch onClick={() => onClick(useText)} />
    </InputContent>
  )
}

export default SearchInput