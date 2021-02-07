import React from 'react'
// import { Category } from '../Category'
import { PhotoCard } from '../PhotoCard'
import { useQuery, gql } from '@apollo/client'
// import { List, Item } from './style'

const withPhotos = gql`
query getPhotos {
  photos {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`
export const ListOfPhotoCards = () => {
  const { loading, error, data } = useQuery(withPhotos)
  console.log(data)
  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading</h2>
  }
  return (
    <ul>

      {data.photos.map((photo) => (

        <PhotoCard key={photo.id} {...photo} />

      ))}

    </ul>
  )
}
