import { BsPersonCircle, BsWhatsapp } from "react-icons/bs"
import Button from "./Button.el"
import { useRouter } from 'next/router'
import { Modal } from "@/interfaces/frontend/Modal.context"
import { LuShoppingCart } from "react-icons/lu"

export default function ModalContent({ ...props }: Modal.Content): JSX.Element {
  if (props.type === 'Cart') {
    return ( // TODO: Implement cart only after having the product object finished to be passed into the cart props.
      <Cart {...props} />
    )
  } else if (props.type === 'Menu') {
    return ( // TODO: Implement menu only after having product section structures finished and ready to be retrieved.
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

  const salesByWhatsApp = () => {
    const phoneNum = '5511977747309'
    const message = encodeURIComponent('Olá, gostaria de saber sobre como comprar um produto com vocês! Poderia me ajudar?');
    const url = `https://wa.me/${phoneNum}?text=${message}`;
    window.open(url, '_blank');
  }

  const supportByWhatsApp = () => {
    const phoneNum = '5511977747309'
    const message = encodeURIComponent('Olá, estou com dúvidas sobre um produto. Poderia me ajudar?');
    const url = `https://wa.me/${phoneNum}?text=${message}`;
    window.open(url, '_blank');
  }

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
          onClick={() => salesByWhatsApp()}
          style={{ height: 12, width: 'screen', text: 'xl', padding: 6 }}
        />
        <Button
          text="Tire suas duvidas"
          title="Canal de duvidas e suporte"
          color={props.color}
          onClick={() => supportByWhatsApp()}
          style={{ height: 12, width: 'screen', text: 'xl', padding: 6 }}
        />
      </div>
    </div>
  )

}

function Cart({ ...props }: Modal.Content): JSX.Element {
  return (
    <div>
      {/* Profile Header */}
      <div className="flex flex-col justify-center items-center pt-6">
        <div className="text-xl font-bold m-1 pb-4">
          Seu carrinho de compras está vazio!
        </div>
        <div className="m-2">
          <LuShoppingCart size={100} />
        </div>
      </div>
    </div>
  )
}