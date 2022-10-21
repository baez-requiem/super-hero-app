import styled, { keyframes } from "styled-components"

const fadeAnim = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 100vh;
  
  background-color: #0009;
  opacity: 0;

  animation: ${fadeAnim} 1s linear forwards .5s;
`

export const Container = styled.div`
  position: relative;
  
  min-width: 300px;
  max-width: 900px;
  max-height: 90%;

  width: 96%;

  display: flex;

  overflow: hidden;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.gray_850};
  box-shadow: 0px 0px 5px 2px ${({ theme }) => theme.colors.gray_800};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    overflow-y: auto;
  }
`

export const ImageContainer = styled.div`
  max-width: 350px;

  @media (max-width: 768px) {
    height: 300px;
  }

  img {
    width: 100%;
    height: 100%;
    object-position: center center;
    object-fit: cover;
  }
`

export const DataContainer = styled.div`
  width: 100%;

  > h1 {
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.red_600};
  }

  > div {
    padding: 10px;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  right: 0px;
  top: 0px;

  height: 36px;
  width: 36px;

  border: none;
  background-color:  ${({ theme }) => theme.colors.white}40;
  font-size: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  svg * {
    stroke: ${({ theme }) => theme.colors.white};
  }

  transition: all .2s;

  &:hover {
    font-size: 1.5rem;
    background-color:  ${({ theme }) => theme.colors.white}60;
  }
`