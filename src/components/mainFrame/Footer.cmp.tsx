import MidModal from '@/components/mainFrame/MidModal.cmp';
import OptionIcons from '../elements/OptionIcons.el';
import Footer from '@/interfaces/frontend/Footer';
import { ModalContext } from '@/context/MidModal.store';
import { useSnapshot } from 'valtio';

export default function Footer({ ...props }: Footer): JSX.Element {

  return (
    <>
      <FooterForMobile {...props} />
    </>
  )

}

function FooterForMobile({ ...props }: Footer): JSX.Element {

  // const { setModalOpen, isModalOpen, lastTypeChosen, onClick } = useContext(ModalContext);
  const { setModalOpen, isModalOpen, lastTypeChosen, onClick } = useSnapshot(ModalContext);
  
  return (
    <div className='flex flex-col mb-32'>
      <MidModal
        action={{ isOpen: isModalOpen, setOpen: setModalOpen }}
        content={{ type: lastTypeChosen, color: props.style.color, action: props.action }}
      />
      <div className={`${props.style.color.secundary.bg} ${props.style.color.secundary.text} ${props.style.color.secundary.shadow} w-full bottom-0 pt-1.5 pb-0.5 z-20 px-8 fixed flex flex-row justify-between items-center rounded-t-xl shadow-upward md:hidden`}>
        <OptionIcons onClick={onClick} />
      </div>
    </div>
  )
}