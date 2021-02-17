import React from 'react'

import { Helmet } from 'react-helmet'
import { Div, Title, Subtitle } from './style'

export const Layaout = ({ children, title, subtitle }) => {
  return (
    <>
      <Helmet>
        {title && <Title>{title} | Petgram 🐶 </Title>}
        {subtitle} && <meta name='description' content='{subtitle}' />
      </Helmet>
      <Div>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </Div>
    </>
  )
}
