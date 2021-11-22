import React, { useEffect, useState } from 'react'
import { Category } from '../Category/Category'
import { List, Item } from './style'

const useCategoriesData = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true)
      fetch('https://petgram-acoll-dev.vercel.app/categories')
      .then(res => res.json())
      .then(res => {
        setCategories(res);
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading } = useCategoriesData();

  useEffect(() => {
    const onScroll = () => { 
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    }

    document.addEventListener('scroll', onScroll)

    return () => {
      document.removeEventListener('scroll', onScroll)
    }

  }, [showFixed])

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed fadeIn' : ''}>
      {
        loading
        ? <Item key='loading'><Category /></Item>
        : categories.map((item) => (
          <Item key={item.id}>
            <Category {...item} />
          </Item>
        ))
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
