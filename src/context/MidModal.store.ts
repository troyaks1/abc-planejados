import { Modal } from "@/interfaces/frontend/Modal.context";
import { proxy } from 'valtio';

export const ModalContext = proxy<Modal.Context>({
  isModalOpen: false,
  lastTypeChosen: null,
  setModalOpen: (state: boolean) => { ModalContext.isModalOpen = state; },
  setTypeChosen: (typeChosen: Modal.Content['type'] | null) => { ModalContext.lastTypeChosen = typeChosen; },
  onClick: (typeChosen: Modal.Content['type']) => {
    const { lastTypeChosen, setModalOpen, setTypeChosen, isModalOpen } = ModalContext;
    if (lastTypeChosen === typeChosen || !isModalOpen) { setModalOpen(!isModalOpen); };
    setTypeChosen(typeChosen);
  }
})