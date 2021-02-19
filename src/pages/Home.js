import React from 'react'
import { ListOfCategory } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { Layaout } from '../components/Layout'

const HomePage = ({ categoryId }) => {
  return (
    <Layaout title='Petgram - App of photos of pets' subtitle='with petgram find friends'>

      <ListOfCategory />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layaout>
  )
}

export default React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
