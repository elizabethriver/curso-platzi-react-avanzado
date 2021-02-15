import React from 'react'
import { PhotoCard } from '../components/PhotoCard/index'
import { GET_PHOTOS } from '../hoc/getPhotos'
import { Query } from '@apollo/client/react/components'

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading</p>
  if (error) return <p>Error!</p>

  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

export const PhotoCardsWithQuery = ({ id }) =>
  (
    <Query query={GET_PHOTOS} variables={{ id }}>
      {renderProp}
    </Query>

  )
