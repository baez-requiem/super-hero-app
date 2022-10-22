import { HeaderContainer, HeaderContent, HeaderLink, HeaderNav } from "./styles"

import { useLocation, Link } from 'react-router-dom'

const Header = () => {

  const { pathname } = useLocation()

  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>MY HERO LIBRARY</h1>

        <HeaderNav>
          <Link to="/">
            <HeaderLink active={pathname !== '/my-lists'}>Home</HeaderLink>
          </Link>
          <Link to="/my-lists">
            <HeaderLink active={pathname === '/my-lists'}>My Lists</HeaderLink>
          </Link>
        </HeaderNav>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header