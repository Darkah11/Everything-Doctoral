import Image from 'next/image'
import React from 'react'
import logo from '@/public/logo-light.png'
import instagram from '@/public/instagram.svg'
import linkedin from '@/public/linkedin.svg'
import youtube from '@/public/youtube.svg'

export default function Footer() {
  return (
    <footer className=' bg-header-10 text-text-10 py-32 px-24 text-lg relative'>
        <div className=' flex justify-between '>
            <div className=' min-w-[250px]'>
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
            <div>
                <Image src={logo} alt='everything doctoral logo'/>
            </div>
            <div className=' text-right min-w-[250px]'>
                <h3 className='text-[22px] font-bold'>Address</h3>
                <p className=' mt-2 ml-auto max-w-[120px] text-right'> 10750 SW 11th Street, Maimi, FL | 7868131324.</p>
            </div>
        </div>
        <p className=' absolute bottom-10 right-0 left-0 mx-auto text-center'>©Everything Doctoral</p>
    </footer>
  )
}
