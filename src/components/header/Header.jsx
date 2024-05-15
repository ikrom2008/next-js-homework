"use client"
import React, { useState } from 'react'
import './Header.css'
import Image from 'next/image'
import Link from 'next/link'
function Header() {
  const [home,setHome] = useState(true)
  const [shopping,setShopping] = useState(false)
  const [blog,setBlog] = useState(false)
  const [about,setAbout] = useState(false)
  return (
    <div className='headercon'>
      <header className='header'>
        <nav className='navbar'>
            <ul className='pages'>
                <li onClick={() => {
                  setHome(true)
                  setShopping(false)
                  setBlog(false)
                  setAbout(false)
                  home ? alert('Siz allaqachon homedasiz') : <></>
                }}><Link href='/' style={home ? {color: 'red' , textDecoration: 'none'} : {color: 'black' , textDecoration: 'none'}}>Home</Link></li>
                <li onClick={() => {
                  setHome(false)
                  setShopping(true)
                  setBlog(false)
                  setAbout(false)
                  shopping ? alert('Siz allaqachon shoppingdasiz') : <></>
                }}><Link href='/shopping' style={shopping ? {color: 'red' , textDecoration: 'none'} : {color: 'black' , textDecoration: 'none'}}>Shop All</Link></li>
                <li onClick={() => {
                  setHome(false)
                  setShopping(false)
                  setBlog(true)
                  setAbout(false)
                  blog ? alert('Siz allaqachon blogdasiz') : <></>
                }}><Link href='/blog' style={blog ? {color: 'red' , textDecoration: 'none'} : {color: 'black' , textDecoration: 'none'}}>Blog</Link></li>
            </ul>
            <Link href='/' onClick={() =>{
              setHome(true)
              setShopping(false)
              setBlog(false)
              setAbout(false)
              home ? alert('Siz allaqachon homedasiz') : <></>
            }} >
            <Image src='Rectangle 2.svg' width={170} height={100} />
            </Link>
            
            <div className='about'>
                <p onClick={() => {
                  setHome(false)
                  setShopping(false)
                  setBlog(false)
                  setAbout(true)
                  about ? alert('Siz allaqachon aboutdasiz') : <></>
                }}><Link href='/about' style={about ? {color: 'red' , textDecoration: 'none'} : {color: 'black' , textDecoration: 'none'}}>About Us</Link></p>
                <input type="search" name="" id="" placeholder='Search Product' />
            </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
