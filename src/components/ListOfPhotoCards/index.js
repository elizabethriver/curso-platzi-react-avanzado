import React from 'react'
// import { Category } from '../Category'
import { PhotoCard } from '../PhotoCard'
// import { List, Item } from './style'

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {
        [1, 2, 3].map((id) =>
          <PhotoCard key={id} />)
}
    </ul>
  )
}
