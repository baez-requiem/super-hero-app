import { SelectContainer } from "./styles"

type InputProps = {
  label?: string
} & React.HTMLProps<HTMLSelectElement>

const Input = ({ label= '', children, ...props }: InputProps) => {

  return (
    <SelectContainer hasLabel={!!label}>
      <label>{label}</label>
      <select {...props}>
        {children}
      </select>
    </SelectContainer>
  )
}

export default Input