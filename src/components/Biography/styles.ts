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

  h3 + h3 {
    color: ${({ theme }) => theme.colors.gray_300};
    width: auto;
  }
`