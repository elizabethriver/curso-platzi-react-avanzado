import React from 'react'
import { PhotoCardsWithQuery } from '../container/PhotoCardWithQuery'
import { Layaout } from '../components/Layout'

export default ({ detailId }) => (
  <Layaout title={`Fototgrafia ${detailId}`}>
    <PhotoCardsWithQuery id={detailId} />
  </Layaout>

)
