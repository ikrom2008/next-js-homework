"use client"
import React from 'react'
import './Footer.css'
import logo from '@/../public/Rectangle 27.svg'
import Image from 'next/image'

function Footer() {
  return (
    <div>
      <footer className='footer'>
          <div className='ulcon'>
            <ul>
              <li><Image src={logo} width={100} height={100} /></li>
              <li>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, <br /> sed do eiusmod tempor<br /> incididunt ut labore et<br /> dolore magna aliqua.</li>
            </ul>
            <ul>
              <li><strong>Contact us</strong></li>
              <li>
              E: info@example.com <br />P: +94 7670000000 <br />A: 123 Hospital rd,<br /> Kalubowila, Dehiwela
              </li>
            </ul>
            <ul>
              <li><strong>Useful links</strong></li>
              <li>
              Shop All <br />
Tempered Glass<br />
Back-cover<br />
About Us
              </li>
              
            </ul>
            <ul>
              <li>Whatsapp</li>
              <li>Facebook</li>
              <li>Instargram</li>
              <li>Tik Tok</li>
            </ul>
          </div>
      </footer>
    </div>
  )
}

export default Footer
