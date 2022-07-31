import React from 'react'

export default function Nav() {
  return (
    <div className='bg-white'>
      <div className='flex flex-row justify-between mx-6 font-[14px] my-6'>
        <div className='flex flex-row gap-4'>
          <h3 className='font-bold mx-4 py-3 px-4 rounded-lg text-violet-400'>Estate World</h3>
        </div>
        <div className='flex flex-row gap-4'>
          <button className='border-2 border-violet-100 py-3 px-6 rounded-lg hover:bg-violet-100'>Login</button>
          <button className='border-2 border-violet-100 py-3 px-6 rounded-lg hover:bg-violet-100'>Sign up</button>
        </div>
      </div>
      <hr/>
    </div>
  )
}
