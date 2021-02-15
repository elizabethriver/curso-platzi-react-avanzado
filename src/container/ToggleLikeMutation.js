
import React from 'react'
import { gql } from '@apollo/client'
import { Mutation } from '@apollo/client/react/components'
const LIKE_PHOTO = gql`
mutation likeAnonymousPhoto(
    $input: LikePhoto!
  ) {
    likeAnonymousPhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`
// export const ToogleLikeMutation = () => {
//   const [mutation] = useMutation(LIKE_PHOTO)
//   return { mutation }
// }

export const ToogleLikeMutation = ({ children }) => {
  return <Mutation mutation={LIKE_PHOTO}>{children}</Mutation>
}
