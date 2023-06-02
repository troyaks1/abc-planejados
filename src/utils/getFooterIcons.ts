import { BsCart, BsPersonCircle, BsWhatsapp } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"

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
      type: 'Cart',
      name_pt: 'Carrinho',
      image: BsCart,
      size: 26,
      cursor: 'cursor-pointer'
    },
    {
      type: 'Profile',
      name_pt: 'Perfil',
      image: BsPersonCircle,
      size: 26,
      cursor: 'cursor-pointer'
    },
    {
      type: 'Menu',
      name_pt: 'Menu',
      image: GiHamburgerMenu,
      size: 26,
      cursor: 'cursor-pointer'
    },
  ]
}