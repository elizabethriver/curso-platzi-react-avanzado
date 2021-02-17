import React from 'react'
import { Query } from '@apollo/client/react/components'
import { gql } from '@apollo/client'
import { ListOfFavs } from '../components/ListOfFavs'

const GET_FAVS = gql`
query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

const renderProp = ({ loading, error, data }) => {
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error!</p>
  }
  const { favs } = data
  return <ListOfFavs favs={favs} />
}

export const FavsWithQuery = () => (
  <Query query={GET_FAVS} fetchPolicy='cache-and-network'>
    {renderProp}
  </Query>
)
