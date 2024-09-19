import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/logo.png'

export default function Navbar() {
  return (
    <nav className=' flex justify-between items-center xl:px-24 lg:px-10 py-8 nav px-5'>
        <Link href={'/'}>
        <Image src={logo} width={276} height={103} className=' w-[200px]'/>
        </Link>

        <div className=' md:hidden'>
          <button className=' w-[30px] flex flex-col gap-2'>
            <span className='w-full bg-header-10 h-[2px]'></span>
            <span className='w-full bg-header-10 h-[2px]'></span>
            <span className='w-full bg-header-10 h-[2px]'></span>
          </button>
        </div>

        <ul className=' md:flex md:items-center gap-2 lg:gap-4 text-sm hidden text-center'>
            <li><Link className='' href={'/meet&grow'}>Meet and Grow</Link></li>
            <li><Link href={'/'}>Upskill your Doctorate</Link></li>
            <li><Link href={'/'}>The academia</Link></li>
            <li><Link href={'/'}>Membership</Link></li>
            <li><Link href={'https://evgdoctoral.com/blog'}>Blogs</Link></li>
        </ul>
    </nav>
  )
}
