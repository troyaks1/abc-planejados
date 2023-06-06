import { createContext, useState, ReactNode } from 'react';
import { Modal } from '@/interfaces/frontend/Modal.context';

export const ModalContext = createContext<Modal.Context>({
  isModalOpen: false,
  lastTypeChosen: null,
  setModalOpen: () => { },
  setTypeChosen: () => { },
  onClick: () => { }
});

export function ModalContextProvider({ ...props }: { children: ReactNode }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [lastTypeChosen, setTypeChosen] = useState<Modal.Content['type'] | null>(null);

  const onClick = (typeChosen: Modal.Content['type']) => {
    if (lastTypeChosen === typeChosen || !isModalOpen) { setModalOpen(!isModalOpen); }
    setTypeChosen(typeChosen);
  }

  return (
    <ModalContext.Provider
      value={{ isModalOpen, setModalOpen, lastTypeChosen, setTypeChosen, onClick }}
    >
      {props.children}
    </ModalContext.Provider>
  );
}
