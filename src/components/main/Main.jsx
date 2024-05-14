"use client"
import React, { useEffect, useState } from 'react'
import './Main.css'
import Image from 'next/image'
import newimg from '@/../public/Rectangle 19.png'
import imgabs from '@/../public/Rectangle 20.png'
import imgphone from '@/../public/Rectangle 22.png'
import car from '@/../public/delivery-truck-van_svgrepo.com.png'
import Loading from '../loading/Loading'

let url = 'https://fakestoreapi.com/products/'

function Main() {
    const [product,setProduct] = useState([])
    const [loading,setLoading] = useState(false)
  const fetchdata = async () =>{
    setLoading(true)
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      setProduct(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchdata()
  },[])
  let prs = product?.map((item) => (
    <li className='list'>
        <Image src={item.image} width={200} height={200} />
        <h4>{item.title.slice(0,20)}</h4>
        <p>${item.price}</p>
    </li>
  ))
  let pr = prs.slice(0,4)
  if(loading){
    return(
      <Loading />
    )
  }else{
    return (
    <div>
      <main className='main'>
        <section className='products'>
            <ul className='lists'>
                {
                    pr
                }
            </ul>
        </section>
        <section className='aboutsect'>
            <div className='titleabout'>
                <h1>I</h1>
                <p>about us</p>
                <h3>If you’re looking for a Premium Quality<br />
Tempered Glass or Back-cover for<br />
your Device </h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <Image style={{marginLeft: '10%'}} src={newimg} width={1000} height={200} />
        </section>
        <section className='price'>
            <div className='pricelist'>
                <div style={{display: 'flex' , flexDirection: 'column' , justifyContent: 'start',alignItems: 'start' , gap: '20px'}}>
                <h2>Shop Premium <br />Tempered Glass in wholesale <br /> Price !</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br /> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure <br /> dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
                <br />
                LKR : 299
                </p>
                <button>Shop Tempered Glass </button>
                </div>
                <Image src={imgphone} width={350} height={300} />
            </div>
            <Image src={imgabs} width={450} height={430} />
        </section>
        <section className='fastcon'>
        <div className='titleabout'>
                <h1>I</h1>
                <p>Why Choose US</p>
            </div>
            <div className='fast'>
                <div className='fast_item'>
                    <Image style={{marginLeft: '40%'}} src={car} width={50} height={50} />
                    <h3>Fast Delivery</h3>
                    <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.</p>
                </div>
                <div className='fast_item'>
                    <Image style={{marginLeft: '40%'}} src={car} width={50} height={50} />
                    <h3>Cheap Price</h3>
                    <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.</p>
                </div>
                <div className='fast_item'>
                    <Image style={{marginLeft: '40%'}} src={car} width={50} height={50} />
                    <h3>Premium Quality</h3>
                    <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.</p>
                </div>
            </div>
        </section>
      </main>
    </div>
  )
  }
  
}

export default Main
