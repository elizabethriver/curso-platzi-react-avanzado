import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'

import { Layaout } from '../components/Layout'

export default () => (
  <Layaout title='Your favorites' subtitle='with petgram find friends'>
    <FavsWithQuery />
  </Layaout>

)
