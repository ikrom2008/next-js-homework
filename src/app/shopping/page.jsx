"use client"
import Loading from '@/components/loading/Loading'
import '@/components/main/Main.css'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
let url = 'https://fakestoreapi.com/products/'
function Shopping() {
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
  if(loading){
    return(
      <Loading />
    )
  }else{
    return (
    <div className='shopping'>
      <h2 style={{width: '80%'}}>Shop All Products</h2>
      <ul className='listitem'>
        {
            prs
        }
      </ul>
    </div>
  )
  }
  
}

export default Shopping
