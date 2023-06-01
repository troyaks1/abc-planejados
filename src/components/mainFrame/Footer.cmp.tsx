import { BsCart, BsWhatsapp, BsPersonCircle } from 'react-icons/bs';
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import Color from '@/interfaces/frontend/Color';
import MidModal from '@/components/mainFrame/MidModal.cmp';

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

  const [isModalClosed, setModalClosed] = useState<boolean>(true);
  const [lastOptionChosen, setOptionChosen] = useState<string>('');

  const handleClick = (optChosen: string) => {
    setOptionChosen(optChosen);
    if (lastOptionChosen === optChosen || isModalClosed) { setModalClosed(!isModalClosed) }
  }

  return (
    <div className='flex flex-col'>
      {/* Mid modal */}
      {!isModalClosed && (
        <MidModal
          style={{ color: props.color, type: lastOptionChosen }}
          action={{ setClosedFromModal: setModalClosed }}
        />
      )}
      {/* Actual Footer */}
      <div className={`flex ${props.color.secundary.bg} ${props.color.secundary.text} ${props.color.secundary.shadow} w-full bottom-0 pt-1.5 pb-0.5 z-10 px-8 absolute flex flex-row justify-between items-center rounded-t-xl shadow-inner lg:hidden`}>
        <div className='flex flex-col items-center cursor-pointer'>
          <div>
            <BsWhatsapp size={26} onClick={() => handleClick('WhatsApp')}/>
          </div>
          <div className='text-xs'>
            WhatsApp
          </div>
        </div>
        <div className='flex flex-col items-center cursor-pointer'>
          <div>
            <BsCart size={26} onClick={() => handleClick('Cart')}/>
          </div>
          <div className='text-xs'>
            Carrinho
          </div>
        </div>
        <div className='flex flex-col items-center cursor-pointer'>
          <div>
            <BsPersonCircle size={26} onClick={() => handleClick('Profile')}/>
          </div>
          <div className='text-xs'>
            Perfil
          </div>
        </div>
        <div className='flex flex-col items-center cursor-pointer'>
          <div>
            <GiHamburgerMenu size={26} onClick={() => handleClick('Menu')}/>
          </div>
          <div className='text-xs'>
            Menu
          </div>
        </div>
      </div>
    </div>
  )
}