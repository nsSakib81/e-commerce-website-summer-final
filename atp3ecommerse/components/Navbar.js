import React from 'react'
import Image from 'next/image'
import Login from '@/pages/login'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div ><header class="text-gray-600 body-font bg-blue-500">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <Image src="/logo.png" width={200} height={40} />
        
      </a>
      <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <a class="mr-5 hover:text-white" href='/about'>About</a>
        <a class="mr-5 hover:text-white" href='/contact'>contact</a>
        <a class="mr-5 hover:text-white" href='/mugs'>mugs</a>
        <a class="mr-5 hover:text-white" href='/order'>Order</a>
      </nav>
      <Link href="/login">sign in</Link>
    </div>
  </header></div>
  )
}
export default Navbar