import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  
  return (
    <nav >
      <div
        className='h-10vh flex justify-between z-50 text-white lg:py-4 px-20 py-4 flex-1 bg-white shadow-sm border-b border-gray-200'>
        <div className='flex items-center flex-1'>
          <Link to='homePage' className='text-2xl font-bold text-black'>RandoStore</Link>
        </div>
        <div className='lg:flex md:flex items-center justify-end font-normal hidden text-black'>
          <div className='flex-10'>
            <ul className='flex gap-8 mr-16 text-[18px]'>
              <Link to='addItems'><li>Add Items</li></Link>
              <Link to='items'><li>Items</li></Link>
              <Link to='checkout'><li>Checkout</li></Link>
            </ul>
          </div>
        </div>

    </div>
    </nav>
  )
}
