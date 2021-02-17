import React from 'react'
import { PhotoCardsWithQuery } from '../container/PhotoCardWithQuery'
import { Layaout } from '../components/Layout'

export const Detail = ({ detailId }) => (
  <Layaout title={`Fototgrafia ${detailId}`}>
    <PhotoCardsWithQuery id={detailId} />
  </Layaout>

)
