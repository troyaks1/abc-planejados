import Color from "@/interfaces/frontend/Color"
import { Dispatch, SetStateAction } from "react"
import { AiFillCloseCircle } from 'react-icons/ai'

export interface Props {
  style: {
    color: Color
    type: string
  }
  action: {
    setClosedFromModal: Dispatch<SetStateAction<boolean>>
  }
}

export default function MidModal({ ...props }: Props): JSX.Element {

  const setModalClosed = () => props.action.setClosedFromModal(true);

  return (
    <div className={`fixed inset-0 z-10 ${props.style.color.primary.bg} rounded-lg lg:hidden`}>
      {/* ^^^ The div above is a ground-cover for the modal in order to disabled underneath elements. The rest below is the modal itself. */}
      <div className='flex flex-col top-0 z-20'>
        <div className="absolute top-0 left-0 m-1 items-center">
          <button className="p-1" onClick={() => setModalClosed()}>
            <AiFillCloseCircle size={30}/>
          </button>
        </div>
        <div className="flex justify-center items-center m-1 px-2">
          {props.style.type}
        </div>
      </div>
    </div>
  )
}