import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'

import { Layaout } from '../components/Layout'

export default () => (
  <Layaout title='Your favorites' subtitle='With petgram you can find friends'>
    <FavsWithQuery />
  </Layaout>

)
