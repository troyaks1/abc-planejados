import { BsCart, BsPersonCircle, BsWhatsapp, BsFileEarmarkPerson } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"
import { CgMenuRound, CgProfile } from 'react-icons/cg'
import { TfiMenu } from 'react-icons/tfi'
import { LuShoppingCart } from 'react-icons/lu'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { FaWhatsappSquare } from 'react-icons/fa'

import Icon from "@/interfaces/frontend/Icon"

export default function getFooterIcons (): Icon[] {
  return [
    {
      type: 'WhatsApp',
      name_pt: 'WhatsApp',
      image: BsWhatsapp,
      size: 26,
      cursor: 'cursor-pointer'
    },
    {
      type: 'Profile',
      name_pt: 'Perfil',
      image: BsFileEarmarkPerson,
      size: 26,
      cursor: 'cursor-pointer'
    },
    {
      type: 'Cart',
      name_pt: 'Carrinho',
      image: LuShoppingCart,
      size: 26,
      cursor: 'cursor-pointer'
    },
    {
      type: 'Menu',
      name_pt: 'Menu',
      image: TfiMenu,
      size: 26,
      cursor: 'cursor-pointer'
    },
  ]
}