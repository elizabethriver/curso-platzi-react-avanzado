import React from 'react'
import { Link, Image } from './style'

const DEFAULT_IMAGE = 'https://i.ibb.co/HFkMgq8/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path = '#', emoji = '?' }) => (
  <Link to={path}>
    <Image src={cover} />
    {emoji}
  </Link>
)
