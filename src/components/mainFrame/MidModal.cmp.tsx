import Color from "@/interfaces/frontend/Color"
import { Dispatch, SetStateAction } from "react"
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsPersonCircle } from "react-icons/bs"
import { useState } from 'react'

export interface Props {
  style: {
    color: Color
    type: string
  }
  action: {
    openItself: boolean
    openAnother?: Dispatch<SetStateAction<boolean>>
  }
}

export default function MidModal({ ...props }: Props): JSX.Element {

  const [isModalOpen, setModalOpen] = useState<boolean>(true)
  
   if (isModalOpen) {
    return (
      <div className={`fixed inset-0 z-10 ${props.style.color.primary.bg} rounded-lg lg:hidden`}>
        {/* ^^^ The div above is a ground-cover for the modal in order to disabled underneath elements. The rest below is the modal itself. */}
        <div className='flex flex-col top-0 z-20'>
          <div className="absolute top-0 left-0 m-1 items-center">
            <button className="p-1" onClick={() => setModalOpen(false)}>
              <AiFillCloseCircle size={30} />
            </button>
          </div>
          <div className="flex justify-center items-center m-1 px-2">
            <ModalContent style={props.style} action={props.action} />
          </div>
        </div>
      </div>
    )
   } else {
    return (<></>)
   }
}

function ModalContent({ ...props }: Props): JSX.Element {
  if (props.style.type === 'WhatsApp') {
    return (
      <div className="flex flex-row">
      </div>
    )
  } else if (props.style.type === 'Cart') {
    return (
      <div>

      </div>
    )
  } else if (props.style.type === 'Profile') {
    return (
      <div>
        <div>
          <div className="text-lg">
            Sua conta
          </div>
          <div>
            <BsPersonCircle size={30} />
          </div>
        </div>
        <div>

        </div>
      </div>
    )
  } else if (props.style.type === 'Menu') {
    return (
      <div>

      </div>
    )
  } else {
    return (
      <div>

      </div>
    )
  }
}