import React from 'react'
import Search from './Search'
import Filterbar from './Filterbar'
import CardArray from './Cards/CardArray'

export default function Main() {
  return (
    <div className='mx-44 my-20'>
      <Search/>
      <Filterbar/>
      <CardArray/>
    </div>
  )
}
