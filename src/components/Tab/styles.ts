import styled, { css } from "styled-components"

export const TabContainer = styled.div``

export const LabelsContainer = styled.div`
  display: flex;
  align-items: flex-end;

  margin-bottom: .5rem;
  overflow-x: auto;
`

interface LabelsTitleProps {
  active?: boolean
}

export const LabelsTitle = styled.h3<LabelsTitleProps>`
  position: relative;
  cursor: pointer;
  transition: color .3s;
  
  padding: 0.5rem 1rem;

  text-align: center;
  color: ${({ theme }) => theme.colors.gray_300};
  
  min-width: 150px;

  &:hover {
    color: ${({ theme }) => theme.colors.gray_100};
  }

  ${({ theme, active }) => active && css`
    color: ${theme.colors.white};
    
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

  @media (max-width: 768px) {
    display: none;
  }
`

export const StyledSelect = styled.select`
  border: none;
  border-radius: 5px;
  padding: 5px;

  font-size: 1.4rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray_800};
  display: none;
  color: ${({ theme }) => theme.colors.gray_100};

  :focus{
    outline: none;
  }

  @media (max-width: 768px) {
    display: block;
  }
`