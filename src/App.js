import React, { useContext } from 'react'
import { Router, Redirect } from '@reach/router'
import { GlobalStyle } from './styles/GlobalStyles'

import { Logo } from './components/Logo'
// import { PhotoCardsWithQuery } from './container/PhotoCardWithQuery'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { NotRegisteredUser } from './pages/NotRegisterUser'
import { User } from './pages/User'
import { Context } from './Context'
import { NotFound } from './pages/NotFound'

// const UserLogged = ({ children }) => {
//   return children({ isAuth: true })
// }
export const App = () => {
  // const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId = urlParams.get('detail')
  // console.log(detailId)
  // const Home = () => <Homerouter />
  const { isAuth } = useContext(Context)
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        {isAuth && <Redirect noThrow from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />

      </Router>

      <NavBar />
    </div>

  )
}
