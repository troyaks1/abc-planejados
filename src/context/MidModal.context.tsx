import { createContext, useState, ReactNode } from 'react';
import { Modal } from '@/interfaces/frontend/Modal.context';

export const ModalContext = createContext<Modal.Context>({
  isModalOpen: false,
  lastTypeChosen: null,
  setOpen: () => {},
  setTypeChosen: () => {},
});

export function ModalContextProvider({ ...props }: { children: ReactNode }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [typeChosen, setTypeChosen] = useState<Modal.Content['type'] | null>(null);

  return (
    <ModalContext.Provider value={{isModalOpen: isModalOpen, setOpen: setModalOpen, lastTypeChosen: typeChosen, setTypeChosen: setTypeChosen}}>
      {props.children}
    </ModalContext.Provider>
  );
}
