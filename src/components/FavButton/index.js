import React from 'react'
import { Buttom } from './style'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  return (
    <Buttom onClick={onClick}>
      <Icon size='32px' />{likes} likes!
    </Buttom>
  )
}
