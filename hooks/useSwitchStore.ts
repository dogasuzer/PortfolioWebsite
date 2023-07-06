import { create } from 'zustand';

interface SwitchStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useSwitchStore = create<SwitchStore>(set => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));

export default useSwitchStore;
