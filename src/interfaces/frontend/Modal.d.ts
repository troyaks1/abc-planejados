declare namespace Modal {
  export interface Props {
    style: {
      color: Color
    }
    action: {
      isOpen: boolean
      setOpen: Dispatch<SetStateAction<boolean>>
      openAnother?: Dispatch<SetStateAction<boolean>>
    }
    content: {
      type: Modal.Content['type']
    }
  }

  export interface Content {
    color: Color
    type: 'WhatsApp' | 'Menu' | 'Profile' | 'Cart' | null
    action: {
      isLogged: boolean
    }
  }
}