import { AiFillCloseCircle } from 'react-icons/ai'
import { useContext, useState } from 'react'
import ModalContent from "@/components/elements/ModalContent.el"

import { Modal } from '@/interfaces/frontend/Modal';

export default function MidModal({ ...props }: Modal.Props): JSX.Element {

  (props.content.type === null) ? (<></>) : null;

  if (props.action.isOpen) {
    return (
      <div className={`absolute inset-0 z-20 ${props.content.color.primary.bg} rounded-lg h-fit pb-14 md:hidden`}>
        {/* ^^^ The div above is a ground-cover for the modal in order to disabled underneath elements. The rest below is the modal itself. */}
        <div className='flex flex-col top-0'>
          <div className="absolute top-0 left-0 m-1 items-center">
            <button className="p-1" onClick={() => props.action.setOpen(false)}>
              <AiFillCloseCircle size={30} />
            </button>
          </div>
          <div className="flex justify-center items-center m-1 px-2">
            <ModalContent { ...props.content } />
          </div>
        </div>
      </div>
    )
  } else {
    return (<></>)
  }
}