import Image from 'next/image'
import logo from 'img/logo.png'
import pseudo from 'img/pseudo.png'
import {SearchIcon, BellIcon} from "@heroicons/react/outline/"
import Link from 'next/link'
import { useEffect, useState } from 'react'
function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className=" flex justify-items-end items-center space-x-2 md:space-x-10">
        <Image
        src= {logo}
        alt="logo-Netflix"

        width={100}
        height={100}
        className="cursor-pointer object-contain"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="HeaderLink">Home</li>
          <li className="HeaderLink">TV shows</li>
          <li className="HeaderLink">Movies</li>
          <li className="HeaderLink">New & Popular</li>
          <li className="HeaderLink"> My list</li>
        </ul>
      </div> 

      <div className=' flex items-center space-x-4 text-sm font-light'>
      <SearchIcon className='hidden h-6 w-6 sm:inline'
      />
      <p className=' hidden lg:inline'> Kids </p>
      <BellIcon className='h-6 w-6'
      />
      <Link href="/account">
      <Image
      src= { pseudo }
      alt="pseudo-netflix"
      width={45}
      height={45}
      className="cursor-pointer rounded"

      />
      </Link>
      </div>
    </header>

  )
}

export default Header
