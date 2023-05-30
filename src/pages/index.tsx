import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BsSearch, BsPersonCircle } from "react-icons/bs";

const Home: NextPage = () => {

  const bgColorPrimary = 'bg-slate-200';
  const textColorPrimary = 'text-zinc-800';
  const bgColorSecundary = 'bg-slate-400'

  return (
    <div className={`${bgColorPrimary} flex flex-col min-h-screen w-full`}>
      {/* Header */}
      <div className={`${bgColorPrimary} top-0 z-50 px-12 py-3 sticky box-border w-full flex justify-between items-center rounded-b-full shadow-xl`}>
        {/* logo */}
        <div className={`absolute mr-auto text-2xl ${textColorPrimary} font-bold`}>
          planejados.abc.br
        </div>
        {/* search bar */}
        <div className='flex relative left-1/2 transform -translate-x-1/2 '>
          <div className={`flex max-w-xs h-10 items-stretch rounded-full overflow-hidden shadow-xl`}>
            <input className={`w-full ${bgColorSecundary} ${textColorPrimary} font-bold px-10 text-sm rounded-l-full outline-none`} />
            <BsSearch className={`absolute right-3 top-2.5 ${textColorPrimary}`} size={20}/>
          </div>
        </div>
        {/* Name and Login */}
        <div className='flex items-center space-x-4'>
          {/* Name */}
          <div className={`${textColorPrimary}`}>
            Olá, cliente!
          </div>
          {/* login */}
          <div className='ml-auto flex flex-row cursor-pointer items-center space-x-2'>
            <BsPersonCircle size={30} className={`${textColorPrimary}`} />
            <div className='flex flex-col text-xs text-white'>
              <div className={`${textColorPrimary}`}>
                Faça login
              </div>
              <div className={`${textColorPrimary} font-bold`}>
                ou cadastre-se
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Home
