import React from 'react'
import { Anchor, Image } from './style'

const DEFAULT_IMAGE = 'https://i.ibb.co/HFkMgq8/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
)
