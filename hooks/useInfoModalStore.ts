import { create } from 'zustand';

export interface ModalStoreInterface {
  projectName?: string;
  projectId?: string;
  isOpen: boolean;
  openModal: (projectId: string) => void;
  closeModal: () => void;
}

const useInfoModalStore = create<ModalStoreInterface>(set => ({
  projectName: undefined,
  isOpen: false,
  openModal: (projectName: string) => set({ isOpen: true, projectName }),
  closeModal: () => set({ isOpen: false, projectName: undefined })
}));

export default useInfoModalStore;
