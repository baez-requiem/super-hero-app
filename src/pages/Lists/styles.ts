import styled from "styled-components"

export const ActionsContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 10px;

  padding: 1rem 0;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_800};
`

interface HeroListContainerProps {
  show: boolean
}

export const HeroListContainer = styled.section<HeroListContainerProps>`
  display: ${({ show }) => show ? 'flex' : 'none'};
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;

  padding-top: 1rem;

  @media (max-width: 768px) {
   justify-content: space-around;
  }
`

export const NoHerosText = styled.h4`
  width: 100%;
  text-align: center;

  color: ${({ theme }) => theme.colors.red_600}60;
`