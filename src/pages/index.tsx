import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BsSearch } from "react-icons/bs";

const Home: NextPage = () => {
  return (
    <div className='flex flex-col min-h-screen w-full'>
      {/* Header */}
      <div className='bg-blue-600 top-0 z-50 px-4 py-0.5 sticky box-border w-full flex justify-between items-center'>
        {/* logo */}
        <div className='absolute mr-auto'>
          LOGO
        </div>
        {/* search bar */}
        <div className='flex relative left-1/2 transform -translate-x-1/2'>
          <div className='flex max-w-xs h-8 items-stretch'>
            <input className='text-white px-8 text-sm font-light rounded-xl outline-none' placeholder='Busque por produtos!' />
            <BsSearch className='absolute right-3 top-2' />
          </div>
        </div>
        {/* Name and Login */}
        <div className='flex items-center'>
          {/* Name */}
          <div className='p-4'>
            NAME
          </div>
          {/* login */}
          <div className='ml-auto'>
            LOGIN
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
