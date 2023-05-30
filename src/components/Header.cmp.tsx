import { BsSearch, BsPersonCircle, BsList } from "react-icons/bs";
import SearchBar from "./elements/SearchBar.el";
import { MouseEventHandler, useState } from "react";

export interface HeaderStyle {
  color: {
    primary: {
      bg: string
      text: string
    },
    secundary: {
      bg: string
      text: string
    },
    terceary: {
      bg: string
      text: string
    }
  }
}


export default function Header({ ...props }: HeaderStyle): JSX.Element {
  return (
    <>
      <HeaderForComputer color={props.color} />
      <HeaderForMobile color={props.color} />
    </>
  )
}

function HeaderForComputer({ ...props }: HeaderStyle) {
  return (
    <div className={`lg:flex ${props.color.primary.bg} top-0 z-50 px-16 py-3 sticky box-border w-full justify-between items-center rounded-b-full shadow-xl hidden`}>
      {/* logo */}
      <div className={`absolute mr-auto text-lg ${props.color.primary.text} font-bold`}>
        www.planejados.abc.br
      </div>
      {/* Search bar */}
      <SearchBar color={props.color} />
      {/* Name and Login */}
      <div className='flex items-center space-x-4'>
        {/* Name */}
        <div className={`${props.color.primary.text}`}>
          Olá, cliente!
        </div>
        {/* login */}
        <div className='ml-auto flex flex-row cursor-pointer items-center space-x-2'>
          <BsPersonCircle size={30} className={`${props.color.primary.text}`} />
          <div className='flex flex-col text-xs text-white'>
            <div className={`${props.color.primary.text}`}>
              Faça login
            </div>
            <div className={`${props.color.primary.text} font-bold`}>
              ou cadastre-se
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function HeaderForMobile({ ...props }: HeaderStyle) {

  const [search, setSearch] = useState(false);

  const openSearchBar = () => {
    (search) ? setSearch(false) : setSearch(true);
    return
  }

  const LogoForMobile = () => {

    return (
      <div className={`flex relative left-1/2 transform -translate-x-1/2 text-md ${props.color.primary.text} font-bold`}>
        planejados.abc.br
      </div>)
  }

  return (
    <div className="lg:hidden flex top-0 z-50 px-16 py-3 sticky box-border w-full justify-between items-center rounded-b-full shadow-xl">
      {/* logo or search bar */}
      { !search && ( <LogoForMobile/> ) }
      { search && ( <SearchBar color={props.color} /> ) }
      <BsSearch className={`${props.color.primary.text} absolute right-8`} size={20} onClick={(e) => openSearchBar()} />
      <BsList className={`${props.color.primary.text} absolute left-8`} size={25} />
    </div>
  )
}