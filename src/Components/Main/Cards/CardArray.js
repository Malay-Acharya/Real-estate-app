import React from 'react'
import Card from './Card'
import { rent } from './Data'

export default function CardArray() {
  return (
    <div className='grid grid-cols-4 gap-4'>
        {rent.map((i, idx)=>{
          return (
            <Card val = {i} key = {idx}/>
          )
        })}
    </div>
  )
}
