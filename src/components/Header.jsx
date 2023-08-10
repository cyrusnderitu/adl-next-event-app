import React from 'react'
import Link from 'next/link';
import Signup from './Signup'

const Header = () => {
  return (
    <div className='h-[4rem] bg-orange-300 flex justify-between items-center px-10'>
        <div className="logo">
            <h2 className='font-bold text-xl'>Welkamu Hardware</h2>
        </div>
        <div className="menu text-xl">
            <ul className='flex justify-between items-center gap-x-8'>
                <Link href={'/'} className='hover:cursor-pointer'>Home</Link>
                <Link href='/speakers' className='hover:cursor-pointer'>Speakers</Link>
                <li>Contact</li>
                <li>About</li>
            </ul>
        </div>
        <div>
            <Signup />
        </div>
    </div>
  )
}

export default Header
