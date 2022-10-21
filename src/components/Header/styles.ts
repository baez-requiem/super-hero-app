import styled, { css } from "styled-components"

export const HeaderContainer = styled.header`
  height: 5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_800};
`

export const HeaderContent = styled.div`
  max-width: 1120px;
  height: 5rem;
  
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;

  h1 {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.red_600};
    padding: 3px 5px;
    border-radius: 2px;

    margin-right: auto;
  }

  @media (max-width: 768px) {
    padding: 0;

    h1 {
      width: 40vw;
      min-width: 150px;
      margin-right: 0;
    }
  }
`

export const HeaderNav = styled.nav`
  margin-left: 5rem;
  height: 5rem;
  
  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    flex-wrap: nowrap;
  }
`

interface HeaderLinkProps {
  active?: boolean
}

export const HeaderLink = styled.a<HeaderLinkProps>`
  display: inline-block;
  position: relative;
  padding: 0.5rem;
  height: 5rem;
  line-height: 5rem;
  color: ${({ theme }) => theme.colors.gray_300};

  transition: color .3s;

  & + a {
    margin-left: 1.5rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white}
  }

  ${({ theme, active }) => active && css`
    color: ${theme.colors.white};
    font-weight: bold;
    
    &::after {
      content: '';
      height: 3px;
      border-radius: 3px 3px 0 0;
      width: 100%;
      position: absolute;
      bottom: 1px;
      left: 0;
      background-color: ${theme.colors.red_600};
    }
  `}
`