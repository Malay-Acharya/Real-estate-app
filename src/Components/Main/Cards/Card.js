import React from 'react'

export default function Card(props) {
  const x = props.val;
  return (
    <div className='flex flex-col w-58 h-96 rounded-xl overflow-hidden '>
      <img className='h-56' src={x.image} alt = "rental property"/>
      <div className='pl-8 pt-4 flex flex-col bg-white h-48 gap-1'>
        <h3 className='text-violet-500 text-xl font-bold after:content-["/month"] after:text-xs after:text-gray-400'>$ {x.price}</h3>
        <h3 className='font-bold text-xl'>{x.name}</h3>
        <h3 className='text-xs text-gray-500'>{x.address}</h3>
        <hr className='w-5/6 my-2'/>
        <div className='w-5/6 flex gap-2 justify-between text-xs'>
          <h3>{x.beds} Beds</h3>
          <h3>{x.baths} Baths</h3>
          <h3>{x.size} m<sup>2</sup></h3>
        </div>
      </div>

    </div>
  )
}
