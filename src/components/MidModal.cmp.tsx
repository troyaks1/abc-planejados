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
    <div className='flex flex-col lg:hidden'>
      <div className="flex items-center">
        <button className="p-1" onClick={() => setModalClosed()}>
          <AiFillCloseCircle />
        </button>
      </div>
      <div className="flex justify-center items-center">
        {props.style.type}
      </div>
    </div>
  )
}