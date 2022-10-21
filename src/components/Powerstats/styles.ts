import styled, { keyframes } from "styled-components"

export const Container = styled.div``

export const InfoRow = styled.div`
  display: flex;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_800};
  padding: .5rem 0;

  h3 {
    margin: 0 0.5rem;
    color: ${({ theme }) => theme.colors.gray_100};
    width: 120px;
  }

  svg {
    color: ${({ theme }) => theme.colors.red_600};
  }
`

const progressAnim = (width:number = 0) => keyframes`
  0% {
    width: 0%;
  }

  100% {
    width: ${width}%;
  }
`

interface ProgressProps {
  value?: number
}

export const Progress = styled.div<ProgressProps>`
  width: 100%;
  height: 10px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.gray_800};

  &::after {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 3;
    width: 0%;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.red_600};
    
    animation: ${({ value }) => progressAnim(value)} 1s linear forwards .5s;
  }
`