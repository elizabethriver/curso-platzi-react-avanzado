import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'

import { Layaout } from '../components/Layout'

export const Favs = () => (
  <Layaout title='Your favorites' subtitle='with petgram find friends'>
    <FavsWithQuery />
  </Layaout>

)
