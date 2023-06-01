import { BsCart, BsPersonCircle, BsWhatsapp } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"
import { IconType } from "react-icons/lib"

interface Icon {
  name_en: string
  name_pt: string
  image: IconType
  size: number
  cursor: string
}


export default function getFooterIcons (): Icon[] {
  return [
    {
      name_en: 'WhatsApp',
      name_pt: 'WhatsApp',
      image: BsWhatsapp,
      size: 26,
      cursor: 'cursor-pointer'
    },
    {
      name_en: 'Cart',
      name_pt: 'Carrinho',
      image: BsCart,
      size: 26,
      cursor: 'cursor-pointer'
    },
    {
      name_en: 'Profile',
      name_pt: 'Perfil',
      image: BsPersonCircle,
      size: 26,
      cursor: 'cursor-pointer'
    },
    {
      name_en: 'Menu',
      name_pt: 'Menu',
      image: GiHamburgerMenu,
      size: 26,
      cursor: 'cursor-pointer'
    },
  ]
}