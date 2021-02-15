import React from 'react'
import { Router } from '@reach/router'
import { GlobalStyle } from './styles/GlobalStyles'

import { Logo } from './components/Logo'
// import { PhotoCardsWithQuery } from './container/PhotoCardWithQuery'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { NotRegisteredUser } from './pages/NotRegisterUser'
import { User } from './pages/User'

const UserLogged = ({ children }) => {
  return children({ isAuth: true })
}
export const App = () => {
  // const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId = urlParams.get('detail')
  // console.log(detailId)
  // const Home = () => <Homerouter />
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
      </Router>

      <UserLogged>
        {
            ({ isAuth }) =>
              isAuth
                ? <Router>
                  <Favs path='/favs' />
                  <User path='/user' />
                  </Router>
                : <Router>
                  <NotRegisteredUser path='/favs' />
                  <NotRegisteredUser path='/user' />
                  </Router>
          }
      </UserLogged>
      <NavBar />
    </div>

  )
}
