import styled, { css } from "styled-components"

interface ButtonProps {
  color?: 'red_600' | 'blue_600'
}

const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: 2px;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  height: 36px;

  padding: 5px 12.5px;

  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, color = 'blue_600' }) => theme.colors[color]};

  transition: filter .3s;

  :hover:not([disabled]) {
    filter: brightness(.8);
  }

  &[disabled] {
    filter: brightness(.8) grayscale(.7);
    pointer-events: none;
  }
`

export default Button