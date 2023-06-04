import { BsPersonCircle } from "react-icons/bs"
import Button from "./Button.el"
import { useRouter } from 'next/router'

export default function ModalContent({ ...props }: Modal.Content): JSX.Element {
  if (props.type === 'Cart') {
    return (
      <div className="h-screen">
        Cart
      </div>
    )
  } else if (props.type === 'Menu') {
    return (
      <div className="h-screen">
        Menu
      </div>
    )
  } else if (props.type === 'Profile') {
    return ( <Profile {...props} /> )
  } else if (props.type === 'WhatsApp') {
    return (
      <div className="h-screen">
        WhatsApp
      </div>
    )
  } else {
    return (
      <div className="h-screen">
        Error: Loading content for {props.type} is not available!
      </div>
    )
  }
}

function Profile({ ...props }: Modal.Content): JSX.Element {

  const router = useRouter();

  if (props.action.isLogged) {
    return (
      <>
      </>
    )
  } else {
    return (
      <div>
        <div className="flex flex-col justify-center items-center pt-6">
          <div className="text-xl font-bold m-1 pb-4">
            Seu perfil está vazio!
          </div>
          <div className="m-2">
            <BsPersonCircle size={100} />
          </div>
        </div>
        <div className="flex flex-col pt-6">
          <Button
            text="Entrar"
            title="Faça login"
            color={props.color}
            onClick={() => router.push("/login")}
            style={{ height: 12, width: 'screen', text: 'xl', padding: 6 }}
          />
          <Button
            text="Registrar"
            title="Cria sua conta"
            color={props.color}
            onClick={() => router.push("/register")}
            style={{ height: 12, width: 'screen', text: 'xl', padding: 6 }}
          />
        </div>
      </div>
    )
  }
}