import styled, { css, keyframes } from "styled-components"

export const CardContainer = styled.div`
  position: relative;
  bottom: 0;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.gray_850};
  border-radius: 5px;

  width: 200px;
  height: 350px;

  overflow: hidden;
  box-shadow: 0 0 5px ${({ theme }) => theme.colors.gray_800};

  transition: all .3s;

  &:hover {
    box-shadow: 10px 10px 10px 0px ${({ theme }) => theme.colors.gray_300}40;
    bottom: 0.5rem;
  }

  img {
    width: 200px;
    height: 260px;
  }
`

export const HeroNameContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray_100};

  transition: color .3s;

  :hover {
    color: ${({ theme }) => theme.colors.white};
  }

  h3 {
    text-align: center;
    padding: 0 5px;
  }
`

export const HeroImageContent = styled.div`
  width: 200px;
  height: 260px;
`

export const OpenListButton = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 30px;
  width: 30px;

  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 15px;

  background-color: ${({ theme }) => theme.colors.gray_100};
  color: ${({ theme }) => theme.colors.gray_900};
  opacity: .7;

  transition: all .3s;

  :hover {
    opacity: 1;
  }
`

interface ListContainerProps {
  show: boolean|null
}

const showListAnim = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

const closeListAnim = keyframes`
  0% { opacity: 1; }
  99% { transform: scale(1); }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`

export const ListContainer = styled.ul<ListContainerProps>`
  position: absolute;
  top: 0px;
  right: 0px;

  width: 100%;
  max-height: 260px;
  padding: 30px 5px 0 5px;

  border-radius: 3px;

  opacity: 0;
  overflow-y: auto;
  transform: scale(0);
  
  background-color: ${({ theme }) => theme.colors.gray_100};

  ${({ show }) => show && css`
    transform: scale(1);
    animation: ${showListAnim} .3s linear forwards;
  `}
  
  ${({ show }) => (typeof show == 'boolean' && !show) && css`
    transform: scale(1);
    animation: ${closeListAnim} .3s linear forwards;
  `}
`

interface ListItemProps {
  active?: boolean
}

export const ListItem = styled.li<ListItemProps>`
  padding: 7.5px 5px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_300};
  color: ${({ theme }) => theme.colors.gray_850};

  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    line-break: anywhere;
  }

  svg {
    cursor: pointer;

    ${({ theme, active }) => active && css`
      color: ${theme.colors.yellow_500};
    `}
  }
`

export const ListItemClose = styled.li`
  padding: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0px;
  left: 0px;
  
  width: 100%;
  height: 30px;

  background-color: ${({ theme }) => theme.colors.gray_100};
  cursor: pointer;
  transition: filter .3s;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};

  :hover {
    filter: brightness(.8);
  }
`