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

  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [lastTypeChosen, setTypeChosen] = useState<Modal.Content['type']>(null);

  const handleClick = (typeChosen: Modal.Content['type']) => {
    if (lastTypeChosen === typeChosen || !isModalOpen) { setModalOpen(!isModalOpen); }
    setTypeChosen(typeChosen);
  }

  return (
    <div className='flex flex-col'>
      <MidModal style={{ color: props.color }} action={{ isOpen: isModalOpen }} content={{type: lastTypeChosen }} />
      {/* Actual Footer being loaded recursively from @/utils/getFotterIcons.ts */}
      <div className={`flex ${props.color.secundary.bg} ${props.color.secundary.text} ${props.color.secundary.shadow} w-full bottom-0 pt-1.5 pb-0.5 z-20 px-8 absolute flex flex-row justify-between items-center rounded-t-xl shadow-upward lg:hidden`}>
        {getFooterIcons().map((icon, index) => {
          return (
            <div key={index} className={`flex flex-col items-center ${icon.cursor}`} onClick={() => handleClick(icon.type)}>
              <div>
                <icon.image size={icon.size} />
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