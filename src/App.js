import React from 'react'
import { ListOfCategory } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { PhotoCard } from './components/PhotoCard'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'

export const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <ListOfCategory />
    <PhotoCard />
    <ListOfPhotoCards />
  </>

)
