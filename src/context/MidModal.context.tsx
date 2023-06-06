import { createContext, useState, ReactNode } from 'react';
import { Modal } from '@/interfaces/frontend/Modal.context';

export const ModalContext = createContext<Modal.Context>({
  isModalOpen: false,
  lastTypeChosen: null,
  setOpen: () => { },
  setTypeChosen: () => { },
  onClick: () => { }
});

export function ModalContextProvider({ ...props }: { children: ReactNode }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [lastTypeChosen, setTypeChosen] = useState<Modal.Content['type'] | null>(null);

  const handleClick = (typeChosen: Modal.Content['type']) => {
    if (lastTypeChosen === typeChosen || !isModalOpen) { setModalOpen(!isModalOpen); }
    setTypeChosen(typeChosen);
  }

  return (
    <ModalContext.Provider
      value={
        {
          isModalOpen: isModalOpen,
          setOpen: setModalOpen,
          lastTypeChosen: lastTypeChosen,
          setTypeChosen: setTypeChosen,
          onClick: handleClick
        }
      }>
      {props.children}
    </ModalContext.Provider>
  );
}
