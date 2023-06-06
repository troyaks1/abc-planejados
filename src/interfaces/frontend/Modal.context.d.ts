import LoginContextI from "./LoginAuth.context"

declare namespace Modal {
  export interface Props {
    action: {
      isOpen: boolean
      setOpen: Dispatch<SetStateAction<boolean>>
      openAnother?: Dispatch<SetStateAction<boolean>>
    }
    content: Modal.Content
  }

  export interface Content {
    color: Color
    type: 'WhatsApp' | 'Menu' | 'Profile' | 'Cart' | null
    action: {
      auth: LoginContextI
    }
  }

  export interface Context {
    isModalOpen: boolean
    setModalOpen: (isOpen: boolean) => void
    lastTypeChosen: Modal.Content['type'] | null
    setTypeChosen: (typeChosen: Modal.Content['type'] | null) => void
    onClick: (typeChosen: Modal.Content['type']) => void
  }
}

