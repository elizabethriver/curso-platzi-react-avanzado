import React from 'react'
import { ListOfCategory } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'

export const Home = ({ categoryId }) => {
  return (
    <>
      <ListOfCategory />
      <ListOfPhotoCards categoryId={categoryId} />
    </>
  )
}
