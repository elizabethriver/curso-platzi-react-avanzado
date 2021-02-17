import React from 'react'
import { ListOfCategory } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { Layaout } from '../components/Layout'

export const Home = ({ categoryId }) => {
  return (
    <Layaout title='Petgram - App of photos of pets' subtitle='with petgram find friends'>

      <ListOfCategory />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layaout>
  )
}
