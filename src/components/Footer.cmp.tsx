import { BsCart, BsWhatsapp, BsPersonCircle, BsList, BsListNested, BsListUl, BsReverseListColumnsReverse } from 'react-icons/bs';
import { BiStoreAlt } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi'
import Color from '@/interfaces/frontend/Color';

interface Props {
  color: Color
}


export default function Footer({ ...props }: Props): JSX.Element {

  return (
    <>
      <FooterForMobile color={props.color} />
    </>
  )

}

function FooterForMobile({ ...props }: Props): JSX.Element {
  return (
    <div className={`flex ${props.color.secundary.bg} ${props.color.secundary.text} ${props.color.secundary.shadow} w-full bottom-0 pt-1.5 pb-0.5 z-50 px-8 absolute flex flex-row justify-between items-center rounded-t-xl shadow-inner lg:hidden`}>
      <div className='flex flex-col items-center cursor-pointer'>
        <div>
          <BsWhatsapp size={26} />
        </div>
        <div className='text-xs'>
          WhatsApp
        </div>
      </div>
      <div className='flex flex-col items-center cursor-pointer'>
        <div>
          <BsCart size={26} />
        </div>
        <div className='text-xs'>
          Carrinho
        </div>
      </div>
      <div className='flex flex-col items-center cursor-pointer'>
        <div>
          <BsPersonCircle size={26} />
        </div>
        <div className='text-xs'>
          Perfil
        </div>
      </div>
      <div className='flex flex-col items-center cursor-pointer'>
        <div>
          <GiHamburgerMenu size={26} />
        </div>
        <div className='text-xs'>
          Listas
        </div>
      </div>
    </div>
  )
}