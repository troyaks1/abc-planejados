import { BsPersonCircle, BsWhatsapp } from "react-icons/bs"
import Button from "./Button.el"
import { useRouter } from 'next/router'
import { Modal } from "@/interfaces/frontend/Modal.context"

export default function ModalContent({ ...props }: Modal.Content): JSX.Element {
  if (props.type === 'Cart') {
    return (
      <div className="">
        Cart
      </div>
    )
  } else if (props.type === 'Menu') {
    return (
      <div className="">
        Menu
      </div>
    )
  } else if (props.type === 'Profile') {
    return (<Profile {...props} />)
  } else if (props.type === 'WhatsApp') {
    return (<WhatsApp {...props} />)
  } else {
    return (<div className=""> Error: Content for {props.type} is not available! </div>)
  }
}

function Profile({ ...props }: Modal.Content): JSX.Element {

  const router = useRouter();

  if (props.action.auth.isLogged) {
    return (
      <>
      </>
    )
  } else {
    return (
      <div>
        {/* Profile Header */}
        <div className="flex flex-col justify-center items-center pt-6">
          <div className="text-xl font-bold m-1 pb-4">
            Seu perfil está vazio!
          </div>
          <div className="m-2">
            <BsPersonCircle size={100} />
          </div>
        </div>
        {/* Path Buttons */}
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

function WhatsApp({ ...props }: Modal.Content): JSX.Element {

  const router = useRouter();
  return (
    <div>
      {/* Profile Header */}
      <div className="flex flex-col justify-center items-center pt-6">
        <div className="text-xl font-bold m-1 pb-4">
          Fale conosco!
        </div>
        <div className="m-2">
          <BsWhatsapp size={100} />
        </div>
      </div>
      {/* Path Buttons */}
      <div className="flex flex-col pt-6">
        <Button
          text="Compre pelo WhatsApp"
          title="Canal de vendas"
          color={props.color}
          onClick={() => router.push("/vendasWpp")}
          style={{ height: 12, width: 'screen', text: 'xl', padding: 6 }}
        />
        <Button
          text="Tire suas duvidas"
          title="Canal de duvidas e suporte"
          color={props.color}
          onClick={() => router.push("/suporteWpp")}
          style={{ height: 12, width: 'screen', text: 'xl', padding: 6 }}
        />
      </div>
    </div>
  )

}