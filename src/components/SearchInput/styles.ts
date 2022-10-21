import styled from "styled-components"

export const InputContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 1.5rem;
  
  background-color: ${({ theme }) => theme.colors.gray_800};
  padding: .25rem 1rem;

  svg {
    margin-left: .5rem;
    color: ${({ theme }) => theme.colors.gray_100};
    cursor: pointer;
  }
`

export const StyledInput = styled.input`
  border: none;
  font-size: 1.4rem;
  background-color: ${({ theme }) => theme.colors.gray_800};
  
  color: ${({ theme }) => theme.colors.gray_100};
  caret-color: ${({ theme }) => theme.colors.gray_100};

  :focus{
    outline: none;
  }
`