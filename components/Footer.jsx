import Image from 'next/image'
import React from 'react'
import logo from '@/public/Logo-light.png'
import instagram from '@/public/instagram.svg'
import linkedin from '@/public/linkedin.svg'
import youtube from '@/public/youtube.svg'

export default function Footer() {
  return (
    <footer className=' bg-header-10 text-text-10 py-32 xl:px-24 lg:px-10 px-5 text-lg relative'>
        <div className=' flex flex-col md:flex-row justify-between '>
            <div className=' md:w-[33%] order-2 md:order-none mt-12 md:mt-0'>
                <div>
                    <h3 className='text-[22px] font-bold'>Connect With Us</h3>
                    <div className=' flex items-center gap-1 mt-2'>
                        <Image src={instagram} alt='instagram icon'/>
                        <Image src={youtube} alt='youtube icon'/>
                        <Image src={linkedin} alt='linkedin icon'/>
                        <p>@evgdoctoral</p>
                    </div>
                </div>
                <div className=' mt-7'>
                    <h3 className='text-[22px] font-bold'>Email</h3>
                    <p className=' mt-2'>contact@evgdoctoral.org</p>
                </div>
            </div>
            <div className=' md:order-none order-1 md:w-[33%]'>
                <Image src={logo} alt='everything doctoral logo' className=' md:mx-auto'/>
            </div>
            <div className=' md:text-right md:w-[33%] md:order-none order-3 mt-12 md:mt-0'>
                <h3 className='text-[22px] font-bold'>Address</h3>
                <p className=' mt-2 md:ml-auto max-w-[120px] md:text-right'> 10750 SW 11th Street, Maimi, FL | 7868131324.</p>
            </div>
        </div>
        <p className=' absolute bottom-10 right-0 left-0 mx-auto text-center'>©Everything Doctoral</p>
    </footer>
  )
}
