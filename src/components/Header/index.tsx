import { useEffect } from "react";
import { HeaderContainer, HeaderContent, HeaderLink, HeaderNav } from "./styles";

const Header = () => {

  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>MY HERO LIBRARY</h1>

        <HeaderNav>
          <HeaderLink href="#" active>Home</HeaderLink>
          <HeaderLink href="#">My Lists</HeaderLink>
        </HeaderNav>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header