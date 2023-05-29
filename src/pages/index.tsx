import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col min-h-screen w-full'>
      <div className='bg-gray-400 top-0 z-50 px-8 sticky box-border block'>
        <div className='py-0.5 w-full box-border'>
          <div className='justify-between w-full items-center flex m-5'>
            {/* search bar */}
            <div className='w-full flex cursor-pointer overflow-hidden max-w-xs h-6 relative'>
              <div className='mr-1 items-stretch flex'>
                <input className='text-black pl-6 text-sm font-light rounded-lg'>

                </input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
