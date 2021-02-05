import React from 'react'
import { Category } from '../Category'
import { categories } from '../../../api/db.json'
import { List, Item } from './style'

export const ListOfCategory = () => {
  return (
    <List>
      {
        categories.map((category) =>
          <Item key={category.id}><Category {...category} /></Item>)
}
    </List>
  )
}
