import React, { useEffect } from 'react'
import { Category } from '../Category/Category'
import { List, Item } from './style'
import data from '../../../api/db.json'

export const ListOfCategories = () => {
  useEffect(() => {
    console.log(data.categories)
  }, [])

  return (
    <List>
      {data.categories.map((item) => (
        <Item key={item.id}>
          <Category {...item} />
        </Item>
      ))}
    </List>
  )
}
