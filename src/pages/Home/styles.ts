import styled from "styled-components"

export const HeroListContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`

export const HeroButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoadMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 1.5rem;
  padding: 0 1.5rem;
  
  border: 0;
  border-radius: 3rem;
  
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.red_600};


  transition: filter .3s;

  &:hover {
    filter: brightness(.8);
  }
`

export const InputContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
   justify-content: center;
  }

  margin-bottom: 2rem;
`

export const InputContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 1.5rem;
  
  background-color: ${({ theme }) => theme.colors.gray_800};
  padding: .25rem 1rem;
  
  input {
    border: none;
    font-size: 1.5rem;
    background-color: ${({ theme }) => theme.colors.gray_800};
    
    color: ${({ theme }) => theme.colors.gray_100};
    caret-color: ${({ theme }) => theme.colors.gray_100};

    :focus{
        outline: none;
    }
  }
`

export const NoHerosText = styled.h4`
  text-align: center;

  color: ${({ theme }) => theme.colors.red_600}60;
`