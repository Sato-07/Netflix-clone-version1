import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/legacy/image'
import background from "img/background.jpeg"
import logo from "img/logo.png"
import { useForm, SubmitHandler } from "react-hook-form";
import { sign } from 'crypto'

interface Inputs{
  email: string
  password: string
}
 

function Login() {
  const [login,setLogin ] = useState(false)
  // Hook form //
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data)=>{
    if(login){
      // await signIn(email,password)

    }
    else{
      // await signUp(email,password)

    }
  }
  return (
    <div className='reative h-screen w-screen md:items-center md:justify-center bg-black md:bg-transparent' >
      <Head>
        <title> Netflix </title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head> 

      <Image
      src={ background } 
      alt=""
      layout='fill'
      objectFit='cover'
      className='opacity-50  -z-10 !hidden sm:!inline '
      />
      <Image
        src= {logo}
        alt="logo-Netflix"
        className=" cursor-pointer object-contain "
        width={150}
        height={150}
        />

        <main className='relative flex flex-col  md:items-center md:justify-center'>
          <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col  mt-10  space-y-8 rounded bg-black/75 py-10 px-6 md:max-w-lg md:px-10'>
            <h1 className='text-white text-4xl font-semibold'>Sign In</h1>
            <div className='space-y-4'>
              <label className='inline-block w-full'>
                <input type="email" placeholder='Email' className='input' {...register("email", {required:true})}/>
                {errors.email && <p className='p-1 font-light text-[13px] text-orange-500'>Please entre a valid email </p>}
              </label>
              <label className='inline-block w-full'>
                <input type="password" placeholder='Password' className='input'{...register("password",{required:true})}/>
                {errors.password && <p className='p-1 font-light text-[13px] text-orange-500'>Your password must contain between 4 and 60 characters. </p>}
              </label>
            </div>
            <button className='w-full rounded bg-[#E50914] py-3 font-semibold' onClick={()=>{setLogin(true)}}> Sign In  </button>
            <div className=' text-[gray]'>
              New to Netflix ? {' '}
              <button type='submit' className='text-white hover:underline' onClick={()=>{setLogin(false)}}> Sign up now </button>
            </div>
          </form>
        </main>
    </div>
  )
} 

export default Login
