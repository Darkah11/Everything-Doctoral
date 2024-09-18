import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/logo.png'

export default function Navbar() {
  return (
    <nav className=' flex justify-between items-center px-24 py-8 nav'>
        <Link href={'/'}>
        <Image src={logo} width={200}/>
        </Link>

        <ul className=' flex gap-4 text-sm'>
            <li><Link className='' href={'/meet&grow'}>Meet and Grow</Link></li>
            <li><Link href={'/'}>Upskill your Doctorate</Link></li>
            <li><Link href={'/'}>The academia</Link></li>
            <li><Link href={'/'}>Membership</Link></li>
        </ul>
    </nav>
  )
}
