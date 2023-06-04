import { BsPersonCircle } from "react-icons/bs"
import Button from "./Button.el"

export default function ModalContent({ ...props }: Modal.Content): JSX.Element {
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
      <div className="overflow-y-auto">
        <div className="flex flex-col justify-center items-center pt-6">
          <div className="text-xl m-1">
            Sua conta
          </div>
          <div className="m-2">
            <BsPersonCircle size={100} />
          </div>
        </div>
        <Profile {...props} />
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

function Profile({ ...props }: Modal.Content): JSX.Element {

  const login = () => {
    console.log('Login button clicked.') //TODO: Implement login route
  }

  const register = () => {
    console.log('Register button clicked'); //TODO: Implement register route
  }

  if (props.action.isLogged) {
    return (
      <>
      </>
    )
  } else {
    return (
      <div className="flex flex-col pt-10">
        <Button
          text="Entrar"
          title="Faça login"
          color={props.color}
          onClick={login}
          style={{ height: 12, width: 'screen', text: 'xl', padding: 10 }}
        />
        <Button 
          text="Registrar"
          title="Cria sua conta"
          color={props.color}
          onClick={register}
          style={{ height: 12, width: 'screen', text: 'xl', padding: 10 }}
        />
      </div>
    )
  }
}