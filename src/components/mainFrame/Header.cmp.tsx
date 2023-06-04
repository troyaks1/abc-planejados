import { BsSearch, BsPersonCircle, BsList } from "react-icons/bs";
import SearchBar from "@/components/elements/SearchBar.el";
import { useState } from "react";
import Color from "@/interfaces/frontend/Color";
import { useRouter } from "next/router";

interface Props {
  color: Color
}


export default function Header({ ...props }: Props): JSX.Element {
  return (
    <>
      <HeaderForComputer color={props.color} />
      <HeaderForMobile color={props.color} />
    </>
  )
}

function HeaderForComputer({ ...props }: Props): JSX.Element {

  const router = useRouter()

  return (
    <div className={`md:flex ${props.color.secundary.bg} ${props.color.secundary.shadow} top-0 z-10 px-16 py-3 sticky box-border w-full justify-between items-center rounded-b-full shadow-md bg-opacity-90 hidden`}>
      {/* logo */}
      <div className={`absolute mr-auto text-lg ${props.color.secundary.text} font-bold cursor-pointer`} onClick={() => router.push('/')}>
        www.planejados.abc.br
      </div>
      {/* Search bar */}
      <SearchBar color={props.color} />
      {/* Name and Login */}
      <div className='flex items-center space-x-4'>
        {/* Name */ /* <div className={`${props.color.secundary.text}`}> Olá cliente! </div> */}
        {/* login */}
        <div className='ml-auto flex flex-row cursor-pointer items-center space-x-2'>
          <BsPersonCircle size={30} className={`${props.color.secundary.text}`} />
          <div className='flex flex-col text-xs text-white'>
            <div className={`${props.color.secundary.text}`}>
              Faça login
            </div>
            <div className={`${props.color.secundary.text} font-bold`}>
              ou cadastre-se
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function HeaderForMobile({ ...props }: Props): JSX.Element {

  const [search, setSearch] = useState(false);
  const router = useRouter()

  const openSearchBar = () => {
    (search) ? setSearch(false) : setSearch(true);
    return
  }

  const LogoForMobile = () => {
    return (
      <div className={`flex relative left-1/2 transform -translate-x-1/2 text-md ${props.color.secundary.text} font-bold cursor-pointer`} onClick={() => router.push('/')}>
        www.planejados.abc.br
      </div>)
  }

  return (
    <div className={`md:hidden ${props.color.secundary.bg} ${props.color.secundary.shadow} flex top-0 z-10 px-16 py-3 sticky box-border w-full justify-between items-center rounded-b-xl bg-opacity-90 shadow-md`}>
      {/* logo or search bar */}
      {!search && (<LogoForMobile />)}
      {search && (<SearchBar color={props.color} />)}
      <BsSearch className={`${props.color.secundary.text} absolute left-8`} size={20} onClick={(e) => openSearchBar()} />
      { /* <BsList className={`${props.color.secundary.text} absolute right-8 cursor-pointer`} size={25} /> */ }
    </div>
  )
}