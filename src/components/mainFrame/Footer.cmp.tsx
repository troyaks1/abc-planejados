import { Modal } from '@/interfaces/frontend/Modal.context';
import { useContext } from 'react'
import Color from '@/interfaces/frontend/Color';
import MidModal from '@/components/mainFrame/MidModal.cmp';
import { ModalContext } from '@/context/MidModal.context';
import Footer from '@/interfaces/frontend/Footer';
import OptionIcons from '../elements/OptionIcons.el';

interface Props {
  color: Color
}


export default function Footer({ ...props }: Footer): JSX.Element {

  return (
    <>
      <FooterForMobile {...props} />
    </>
  )

}

function FooterForMobile({ ...props }: Footer): JSX.Element {

  const { setOpen, isModalOpen, lastTypeChosen, onClick } = useContext(ModalContext);

  return (
    <div className='flex flex-col mb-32'>
      <MidModal
        action={{ isOpen: isModalOpen, setOpen: setOpen }}
        content={{ type: lastTypeChosen, color: props.style.color, action: props.action }}
      />
      <div className={`${props.style.color.secundary.bg} ${props.style.color.secundary.text} ${props.style.color.secundary.shadow} w-full bottom-0 pt-1.5 pb-0.5 z-20 px-8 fixed flex flex-row justify-between items-center rounded-t-xl shadow-upward md:hidden`}>
        <OptionIcons onClick={onClick} />
      </div>
    </div>
  )
}