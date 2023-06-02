declare namespace Modal {
  export interface Props {
    style: {
      color: Color
    }
    action: {
      isOpen: boolean
      openAnother?: Dispatch<SetStateAction<boolean>>
    }
    content: {
      type: Modal.Content['type']
    }
  }

  export interface Content {
    color: Color
    type: 'WhatsApp' | 'Menu' | 'Profile' | 'Cart' | null
  }
}