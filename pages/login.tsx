import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import background from "img/background.jpeg"
import logo from "img/logo.png"
function Login() {
  return (
    <div className='relative flex flex-col h-screen w-screen bg-black md:items-center md:justify-center md:bg-transparent' >
      <Head>
        <title> Netflix </title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head> 

      <Image
      src={ background }
      alt=""
      layout='fill'
      objectFit='cover'
      className='opacity-60 -z-10 h-screen w-screen object-cover !hidden sm:!inline '
      />
      <Image
        src= {logo}
        alt="logo-Netflix"

        width={150}
        height={150}
        className=" absolute left-0 top-0 cursor-pointer object-contain"
        />
        <form className='relative mt-24  space-y-8 rounded bg-black/75 py-10 md:mt-0 md:max-w-md md:px-14'>
          <h1 className=' '>Sign In</h1>
          <div className='space-y-4'>
            <label className='inline-block w-full'>
              <input type="email" placeholder='Email' className='input'/>
            </label>
            <label className='inline-block w-full'>
              <input type="password" placeholder='Password' className='input'/>
            </label>
          </div>
        </form>
    </div>
  )
} 

export default Login
