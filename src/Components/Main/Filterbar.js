import React from 'react'
import MultiRangeSlider from 'react-js-multi-range-sliders';

export default function Filterbar() {
  return (
    <>
      <form className="flex my-8 bg-white rounded-xl p-8 justify-around" onSubmit={(e)=>{
          e.preventDefault();
          console.log("Submitted");
        }}>
          <div className='flex flex-col'>
            <label>Location</label>
            <input type="text" placeholder="New York, USA" className='py-3'></input>
          </div>
          <div className='h-18 w-0.5 mx-4 bg-violet-100 '>
          </div>
          <div className='flex flex-col'>
            <label>When</label>
            <input type="datetime-local" placeholder='Select Move-in Date' className='py-3'></input>
          </div>
          <div className='h-18 w-0.5 mx-4 bg-violet-100 '></div>
          <div className='flex flex-col'>
            <label>Price</label>
            <MultiRangeSlider
                min={500}
                max={5000}
                title = ""
                className="inline-block pb-6 text-black"
                onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
              />
          </div>
          <div className='h-82 w-0.5 mx-4 bg-violet-100 '></div>
          <div className='flex flex-col pr-8 '>
            <label className='pl-1'>Property type</label>
            <select name="housetype" className='py-3'>
              <option value="houses">Houses</option>
              <option value="cottage">Cottage</option>
              <option value="apartment">Apartment</option>
              <option value="penthouse">Penthouse</option>
            </select>
          </div>
          <div className='h-82 w-0.5 mx-4 bg-violet-100 '></div>
          <button className="bg-violet-600 text-white px-12 rounded-lg ml-8">Search</button>
      </form>
    </>
  )
}
