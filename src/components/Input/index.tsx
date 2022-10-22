import { InputContainer } from "./styles"

type InputProps = {
  label?: string
} & React.HTMLProps<HTMLInputElement>

const Input = ({ label= '', ...props }: InputProps) => {

  return (
    <InputContainer hasLabel={!!label}>
      <label>{label}</label>
      <input type="text" {...props} />
    </InputContainer>
  )
}

export default Input