import React from 'react'
import { PhotoCard } from '../PhotoCard/PhotoCard'

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((photoCard) => (
        <li key={photoCard} >
          <PhotoCard id={photoCard} />
        </li>
      ))}
    </ul>
  )
}
