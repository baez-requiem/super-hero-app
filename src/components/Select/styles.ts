import styled, { css } from "styled-components"

interface SelectContainerProps {
  hasLabel: boolean
}

export const SelectContainer = styled.div<SelectContainerProps>`
  display: flex;
  flex-direction: column;
  
  position: relative;
  width: 100%;

  ${({ hasLabel }) => hasLabel && css`
    padding-top: 1.6rem;
  `}

  label {
    position: absolute;
    top: 0px;
    z-index: 1;

    font-size: 1rem;
    color: ${({ theme }) => theme.colors.gray_100};
    background-color: ${({ theme }) => theme.colors.gray_850};
    border-radius: 5px;
    padding: 5px 5px 10px 5px;
  }

  select {
    position: relative;
    z-index: 2;

    border: none;
    border-radius: 5px;
    
    width: 100%;
    height: 36px;
    padding: 5px 7.5px;

    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.gray_100};
    caret-color: ${({ theme }) => theme.colors.gray_100};
    background-color: ${({ theme }) => theme.colors.gray_800};

    :focus{
      outline: none;
    }  
  }
`