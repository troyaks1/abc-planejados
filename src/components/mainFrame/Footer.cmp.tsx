import { Modal } from '@/interfaces/frontend/Modal';
import { useState } from 'react'
import Color from '@/interfaces/frontend/Color';
import MidModal from '@/components/mainFrame/MidModal.cmp';
import getFooterIcons from '@/utils/getFooterIcons';
import Footer from '@/interfaces/frontend/Footer';

interface Props {
  color: Color
}


export default function Footer({ ...props }: Footer): JSX.Element {

  return (
    <>
      <FooterForMobile { ...props } />
    </>
  )

}

function FooterForMobile({ ...props }: Footer): JSX.Element {

  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [lastTypeChosen, setTypeChosen] = useState<Modal.Content['type']>(null);

  const handleClick = (typeChosen: Modal.Content['type']) => {
    if (lastTypeChosen === typeChosen || !isModalOpen) { setModalOpen(!isModalOpen); }
    setTypeChosen(typeChosen);
  }

  return (
    <div className='flex flex-col mb-32'>
      <MidModal action={{ isOpen: isModalOpen, setOpen: setModalOpen }} content={{type: lastTypeChosen, color: props.style.color, action: props.action }} />
      {/* Actual Footer being loaded recursively from @/utils/getFotterIcons.ts */}
      <div className={`${props.style.color.secundary.bg} ${props.style.color.secundary.text} ${props.style.color.secundary.shadow} w-full bottom-0 pt-1.5 pb-0.5 z-20 px-8 fixed flex flex-row justify-between items-center rounded-t-xl shadow-upward md:hidden`}>
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