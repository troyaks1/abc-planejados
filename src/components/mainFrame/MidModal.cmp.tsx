import { AiFillCloseCircle } from 'react-icons/ai'
import ModalContent from "@/components/elements/ModalContent.el"
import { Modal } from '@/interfaces/frontend/Modal.context';

export default function MidModal({ ...props }: Modal.Props): JSX.Element {

  if (props.content.type === null) { return (<></>) };
  if (!props.action.isOpen) { return (<></>) };

  return (
    <>
      <MidModalForPC { ...props } />
      <MidModalForMobile { ...props } />
    </>
  )

}

function MidModalForPC({ ...props }: Modal.Props): JSX.Element {

  return (
    <div className={`md:absolute w-1/3 mx-auto inset-16 z-20 ${props.content.color.secundary.bg} rounded-lg overflow-y-auto md:block hidden`}>
      {/* ^^^ The div above is a ground-cover for the modal in order to disabled underneath elements. The rest below is the modal itself. */}
      <div className='flex flex-col'>
        <div className="absolute top-0 left-0 m-1 items-center">
          <button className="p-1" onClick={() => props.action.setOpen(false)}>
            <AiFillCloseCircle size={30} />
          </button>
        </div>
        <div className="flex justify-center items-center m-1 px-2">
          <ModalContent {...props.content} />
        </div>
      </div>
    </div>
  )
}

function MidModalForMobile({ ...props }: Modal.Props): JSX.Element {

  return (
    <div className={`md:hidden absolute inset-0 z-20 ${props.content.color.primary.bg} rounded-lg h-fit pb-14`}>
      {/* ^^^ The div above is a ground-cover for the modal in order to disabled underneath elements. The rest below is the modal itself. */}
      <div className='flex flex-col top-0'>
        <div className="absolute top-0 left-0 m-1 items-center">
          <button className="p-1" onClick={() => props.action.setOpen(false)}>
            <AiFillCloseCircle size={30} />
          </button>
        </div>
        <div className="flex justify-center items-center m-1 px-2">
          <ModalContent {...props.content} />
        </div>
      </div>
    </div>
  )
}