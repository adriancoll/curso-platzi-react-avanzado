import React from 'react'
import { ListOfCategories } from './components/ListOfCategories/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards/ListOfPhotoCards'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'

export const App = () => {
  return (
    <>
      <Logo />
      <GlobalStyles />
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  )
}
