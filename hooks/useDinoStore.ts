import { create } from 'zustand';

export interface DinoStoreInterface {
  isJumping: boolean;
  isRunning: boolean;
  setJump: () => void;
  setRun: () => void;
}

const useDinoStore = create<DinoStoreInterface>((set, get) => ({
  isJumping: false,
  isRunning: false,
  setJump: () => set({ isJumping: !get().isJumping }),
  setRun: () => set({ isRunning: !get().isRunning })
}));

export default useDinoStore;
