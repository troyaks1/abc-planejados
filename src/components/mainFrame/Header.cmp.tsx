import { BsSearch } from "react-icons/bs";
import SearchBar from "@/components/elements/SearchBar.el";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Header from "@/interfaces/frontend/Header";
import { Modal } from "@/interfaces/frontend/Modal.context";
import MidModal from "./MidModal.cmp";
import OptionIcons from "../elements/OptionIcons.el";
import { ModalContext } from "@/context/MidModal.context";


export default function Header({ ...props }: Header): JSX.Element {
  return (
    <>
      <HeaderForComputer {...props} />
      <HeaderForMobile {...props} />
    </>
  )
}

function HeaderForComputer({ ...props }: Header): JSX.Element {

  const router = useRouter();
  const { setModalOpen, isModalOpen, lastTypeChosen, onClick } = useContext(ModalContext);

  return (
    <div className={`md:flex ${props.style.color.secundary.bg} ${props.style.color.secundary.shadow} top-0 z-10 px-16 py-3 sticky box-border w-full justify-between items-center rounded-b-full shadow-md bg-opacity-90 hidden`}>
      {/* logo */}
      <div className={`absolute mr-auto text-lg ${props.style.color.secundary.text} font-bold cursor-pointer`} onClick={() => router.push('/')}>
        www.planejados.abc.br
      </div>
      {/* Search bar */}
      <SearchBar color={props.style.color} />
      <MidModal
        action={{ isOpen: isModalOpen, setOpen: setModalOpen }}
        content={{ type: lastTypeChosen, color: props.style.color, action: props.action }} />
      <div className="grid grid-flow-col auto-cols-max gap-x-6">
        <OptionIcons onClick={onClick} surpressName={true} />
      </div>
    </div>
  )
}

function HeaderForMobile({ ...props }: Header): JSX.Element {

  const [search, setSearch] = useState(false);
  const router = useRouter()

  const openSearchBar = () => {
    (search) ? setSearch(false) : setSearch(true);
    return
  }

  const LogoForMobile = () => {
    return (
      <div className={`flex relative left-1/2 transform -translate-x-1/2 text-md ${props.style.color.secundary.text} font-bold cursor-pointer`} onClick={() => router.push('/')}>
        www.planejados.abc.br
      </div>)
  }

  return (
    <div className={`md:hidden ${props.style.color.secundary.bg} ${props.style.color.secundary.shadow} flex top-0 z-10 px-16 py-3 sticky box-border w-full justify-between items-center rounded-b-xl bg-opacity-90 shadow-md`}>
      {!search && (<LogoForMobile />)} {search && (<SearchBar color={props.style.color} />)}
      <BsSearch className={`${props.style.color.secundary.text} absolute left-8`} size={20} onClick={(e) => openSearchBar()} />
    </div>
  )
}