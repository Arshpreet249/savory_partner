import React from 'react'

const Dashboard = () => {
  return (
    <div className=' w-full px-6  '>
        <div className='w-auto h-auto flex justify-evenly pt-4 '>
          <div className=" shadow-2xl p-3 rounded-xl hover:border hover:border-gray-300 cursor-pointer">All</div>
          <div className=" shadow-2xl p-3 rounded-xl hover:border hover:border-gray-300 cursor-pointer">Drinks</div>
          <div className=' shadow-2xl p-3 rounded-xl hover:border hover:border-gray-300 cursor-pointer' > Sweets</div>
          <div className=' shadow-2xl p-3 rounded-xl hover:border hover:border-gray-300 cursor-pointer '>Vegetarian</div>
          <div className=' shadow-2xl p-3 rounded-xl hover:border hover:border-gray-300 cursor-pointer'>Non-Vegeterian</div>
        
        </div>
      </div>
   
  )
}

export default Dashboard