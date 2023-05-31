import { BsCart, BsWhatsapp, BsPersonCircle } from 'react-icons/bs';
import { BiStoreAlt } from 'react-icons/bi';
import Color from '@/interfaces/frontend/Color';

export interface FooterStyle {
  color: Color
}


export default function Footer({ ...props }: FooterStyle): JSX.Element {

  return (
    <>
      <FooterForMobile color={props.color} />
    </>
  )

}

function FooterForMobile({ ...props }: FooterStyle): JSX.Element {
  return (
    <div className={`flex ${props.color.secundary.bg} ${props.color.secundary.text} ${props.color.secundary.shadow} w-full bottom-0 pt-1.5 pb-0.5 z-50 absolute flex flex-row justify-around items-center rounded-t-xl shadow-inner lg:hidden`}>
      <div className='flex flex-col items-center'>
        <div>
          <BiStoreAlt size={20} />
        </div>
        <div className='text-sm'>
          Início
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div>
          <BsWhatsapp size={20} />
        </div>
        <div className='text-sm'>
          WhatsApp
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div>
          <BsCart size={20} />
        </div>
        <div className='text-sm'>
          Carrinho
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div>
          <BsPersonCircle size={20} />
        </div>
        <div className='text-sm'>
          Perfil
        </div>
      </div>
    </div>
  )
}