import { create } from 'zustand';

export interface SlideStoreInterface {
  currentSkill: number;
  input: number | boolean | null;
  setCurrentSkill: (input: number) => void;
  setisCurrentSkillExist: (input: boolean) => void;
  isCurrentSkillExist: boolean;
}

const useSlideStore = create<SlideStoreInterface>(set => ({
  currentSkill: 1,
  isCurrentSkillExist: false,
  input: null,
  setCurrentSkill: input => set({ currentSkill: input }),
  setisCurrentSkillExist: input => set({ isCurrentSkillExist: input })
}));

export default useSlideStore;
