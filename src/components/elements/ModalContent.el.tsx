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