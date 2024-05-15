"use client"
import React from 'react'
import './Header.css'
import Image from 'next/image'
import Link from 'next/link'
function Header() {
  return (
    <div className='headercon'>
      <header className='header'>
        <nav className='navbar'>
            <ul className='pages'>
                <li><Link href='/' style={{textDecoration:'none', color: 'black'}}>Home</Link></li>
                <li><Link href='/shopping' style={{textDecoration:'none', color: 'black'}}>Shop All</Link></li>
                <li><Link href='/blog' style={{textDecoration:'none', color: 'black'}}>Blog</Link></li>
            </ul>
            <Link href='/' >
            <Image src='Rectangle 2.svg' width={170} height={100} />
            </Link>
            
            <div className='about'>
                <p><Link href='/about' style={{textDecoration:'none', color: 'black'}}>About Us</Link></p>
                <input type="search" name="" id="" placeholder='Search Product' />
            </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
