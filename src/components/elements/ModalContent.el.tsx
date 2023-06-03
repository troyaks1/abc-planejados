import { BsPersonCircle } from "react-icons/bs"

export default function ModalContent ({...props}: Modal.Content): JSX.Element {
  if (props.type === 'Cart') {
    return (
      <>
      </>
    )
  } else if (props.type === 'Menu') {
    return (
      <>
      </>
    )
  } else if (props.type === 'Profile') {
    return (
      <div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-xl m-1">
            Sua conta
          </div>
          <div className="m-2">
            <BsPersonCircle size={100} />
          </div>
        </div>
        <div>
  
        </div>
      </div>
    )
  } else if (props.type === 'WhatsApp') {
    return (
      <>
      </>
    )
  } else {
    return (
      <>
        Error: Loading content for {props.type} is not available!
      </>
    )
  }
}