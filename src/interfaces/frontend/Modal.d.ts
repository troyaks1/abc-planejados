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
}