import React from 'react'
import { ListOfCategory } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { Layaout } from '../components/Layout'

const HomePage = ({ categoryId }) => {
  return (
    <Layaout title='Petgram - App of photos of pets' subtitle='With petgram you can find funny photos'>

      <ListOfCategory />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layaout>
  )
}

export default React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
