import { create } from 'zustand';

export interface NavbarNavigateInterface {
  navbarDestination?: string;
  setPage: (navbarDestination: string) => void;
}

const useNavbarNavigate = create<NavbarNavigateInterface>(set => ({
  navbarDestination: undefined,
  setPage: (navbarDestination: string) => set({ navbarDestination })
}));

export default useNavbarNavigate;
