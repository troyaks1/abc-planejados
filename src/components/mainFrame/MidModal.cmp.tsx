import { AiFillCloseCircle } from 'react-icons/ai'
import { useState } from 'react'
import ModalContent from "@/components/elements/ModalContent.el"

export default function MidModal({ ...props }: Modal.Props): JSX.Element {

  (props.content.type === null) ? (<></>) : null;

  if (props.action.isOpen) {
    return (
      <div className={`absolute inset-0 z-20 ${props.style.color.primary.bg} rounded-lg min-h-fit pb-14 lg:hidden`}>
        {/* ^^^ The div above is a ground-cover for the modal in order to disabled underneath elements. The rest below is the modal itself. */}
        <div className='flex flex-col top-0'>
          <div className="absolute top-0 left-0 m-1 items-center">
            <button className="p-1" onClick={() => props.action.setOpen(false)}>
              <AiFillCloseCircle size={30} />
            </button>
          </div>
          <div className="flex justify-center items-center m-1 px-2">
            <ModalContent type={props.content.type} color={props.style.color} action={{isLogged: false}} />
          </div>
        </div>
      </div>
    )
  } else {
    return (<></>)
  }
}