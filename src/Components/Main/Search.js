import React from 'react'

export default function Search() {
  return (
    <div className='flex justify-between'>
        <h3 className='font-bold text-3xl pt-2'>Search properties to rent</h3>
        <input type="text" name="search" placeholder='Search with SearchBar' className='block py-6 px-12 h-12 outline-violet-100 border-violet-100'></input>
    </div>
  )
}
