import { BsCart, BsWhatsapp, BsPersonCircle } from 'react-icons/bs';
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import Color from '@/interfaces/frontend/Color';
import MidModal from '@/components/mainFrame/MidModal.cmp';
import getFooterIcons from '@/utils/getFooterIcons';

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
      {/* Actual Footer being loaded cursively from @/utils/getFotterIcons.ts */}
      <div className={`flex ${props.color.secundary.bg} ${props.color.secundary.text} ${props.color.secundary.shadow} w-full bottom-0 pt-1.5 pb-0.5 z-10 px-8 absolute flex flex-row justify-between items-center rounded-t-xl shadow-inner lg:hidden`}>
        {getFooterIcons().map((icon, index) => {
          return (
            <div key={index} className={`flex flex-col items-center ${icon.cursor}`}>
              <div>
                <icon.image size={icon.size} onClick={() => handleClick(icon.name_en)} />
              </div>
              <div className='text-xs'>
                {icon.name_pt}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}