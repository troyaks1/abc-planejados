import Color from "@/interfaces/frontend/Color"
import { Dispatch, SetStateAction } from "react"
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsPersonCircle } from "react-icons/bs"
import { useState } from 'react'
import ModalContent from "../elements/modalContent.el"

export default function MidModal({ ...props }: Modal.Props): JSX.Element {

  const setModalClosed = () => props.action.isOpen = false;

  (props.content.type === null) ? (<></>) : null;

  if (props.action.isOpen) {
    return (
      <div className={`fixed inset-0 z-10 ${props.style.color.primary.bg} rounded-lg lg:hidden`}>
        {/* ^^^ The div above is a ground-cover for the modal in order to disabled underneath elements. The rest below is the modal itself. */}
        <div className='flex flex-col top-0 z-20'>
          <div className="absolute top-0 left-0 m-1 items-center">
            <button className="p-1" onClick={() => setModalClosed()}>
              <AiFillCloseCircle size={30} />
            </button>
          </div>
          <div className="flex justify-center items-center m-1 px-2">
            <ModalContent type={props.content.type} color={props.style.color} />
          </div>
        </div>
      </div>
    )
  } else {
    return (<></>)
  }
}