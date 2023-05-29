import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BsSearch } from "react-icons/bs";

const Home: NextPage = () => {
  return (
    <div className='flex flex-col min-h-screen w-full'>
      <div className='bg-blue-600 top-0 z-50 px-8 sticky box-border block'>
        <div className='py-0.5 w-full box-border'>
          <div className='justify-between w-full items-center flex m-1'>
            {/* search bar */}
            <div className='w-fit flex max-w-xs h-8 relative items-stretch'>
              <input className='text-white px-8 text-sm font-light rounded-xl outline-none' placeholder='Busque por produtos!' />
              <BsSearch className='absolute right-3 top-2' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
