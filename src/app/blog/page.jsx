import React from 'react'
import '@/components/main/Main.css'
import Image from 'next/image'
import tem from '@/../public/Rectangle 65.png'
function Blog() {
  return (
    <div className='blog'>
      <h2>Blog Posts</h2>
      <div className='blogtext'>
        <div>
            <h3>Tempered Glass</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum sit amet <br /> justo donec enim diam vulputate ut. Malesuada fames ac turpis egestas maecenas. Dictum fusce ut <br /> placerat orci nulla pellentesque dignissim. Neque laoreet suspendisse interdum consectetur.Turpis <br /> massa sed elementum tempus egestas sed sed. Ornare massa eget egestas purus viverra accumsan <br /> in. Tristique senectus et netus et malesuada. Ornare suspendisse sed nisi lacus sed. Aliquet nibh <br /> praesent tristique magna sit. Ac auctor augue mauris augue neque gravida in fermentum et. Erat <br /> imperdiet sed euismod nisi porta lorem mollis aliquam ut. Proin libero nunc consequat interdum varius <br /> sit amet mattis. Odio eu feugiat pretium nibh ipsum.</p>
        </div>
        <Image src={tem} width={300} height={300} />
      </div>
      <div className='blogtext'>
        <Image src={tem} width={300} height={300} />
        <div>
            <h3>Back Cover</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum sit amet <br /> justo donec enim diam vulputate ut. Malesuada fames ac turpis egestas maecenas. Dictum fusce ut <br /> placerat orci nulla pellentesque dignissim. Neque laoreet suspendisse interdum consectetur.Turpis <br /> massa sed elementum tempus egestas sed sed. Ornare massa eget egestas purus viverra accumsan <br /> in. Tristique senectus et netus et malesuada. Ornare suspendisse sed nisi lacus sed. Aliquet nibh <br /> praesent tristique magna sit. Ac auctor augue mauris augue neque gravida in fermentum et. Erat <br /> imperdiet sed euismod nisi porta lorem mollis aliquam ut. Proin libero nunc consequat interdum varius <br /> sit amet mattis. Odio eu feugiat pretium nibh ipsum.</p>
        </div>
        
      </div>
      <div className='blogtext'>
        <div style={{width: '100%'}}>
            <h3>Mobile Brand and Price Strategy</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum sit amet  justo donec enim diam vulputate ut. Malesuada fames ac turpis egestas maecenas. Dictum fusce ut  placerat orci nulla pellentesque dignissim. Neque laoreet suspendisse interdum consectetur.Turpis  massa sed elementum tempus egestas sed sed. Ornare massa eget egestas purus viverra accumsan  in. Tristique senectus et netus et malesuada. Ornare suspendisse sed nisi lacus sed. Aliquet nibh  praesent tristique magna sit. Ac auctor augue mauris augue neque gravida in fermentum et. Erat  imperdiet sed euismod nisi porta lorem mollis aliquam ut. Proin libero nunc consequat interdum varius  sit amet mattis. Odio eu feugiat pretium nibh ipsum.</p>
        </div>
        
      </div>
    </div>
  )
}

export default Blog