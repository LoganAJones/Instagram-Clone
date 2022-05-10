import React from 'react'

function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
        <img 
        src="https://media-exp1.licdn.com/dms/image/C5603AQF8Mpqhc9Mslw/profile-displayphoto-shrink_200_200/0/1629605959782?e=1657756800&v=beta&t=BbSBl8SGcBk6HeK04T_ALyaTYVLjK02BTB7FEfTPvuE" 
        alt=""
        className="rounded-full border w-16 h-16 p-[2px] cursor-pointer"
        />

        <div className='flex-1 mx-4'>
            <h2 className='font-bold'>loganjones</h2>
            <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
        </div>

        <button type="" className='text-blue-400 text-sm'>Sign Out</button>
    </div>
  )
}

export default MiniProfile