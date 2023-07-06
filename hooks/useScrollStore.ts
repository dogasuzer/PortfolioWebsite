import { create } from 'zustand';

export interface ScrollStoreInterface {
  currentPosition: number;
  input: number | null;
  setCurrentPosition: (input: number) => void;
}

const useScrollStore = create<ScrollStoreInterface>(set => ({
  currentPosition: 0,
  input: null,
  setCurrentPosition: input => set({ currentPosition: input })
}));

export default useScrollStore;
