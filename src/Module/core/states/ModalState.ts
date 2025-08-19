import { create } from 'zustand';

interface ModelState {
  isOpenAddModel: boolean;
  isOpenEditModel: boolean;
  setIsOpenAddModel: () => void;
  setIsOpenEditModel: () => void;
  CloseAllModal: () => void;
}

export const useModalState = create<ModelState>((set) => ({
  isOpenAddModel: false,
  isOpenEditModel: false,
  setIsOpenAddModel: () =>
    set((state) => ({ isOpenAddModel: !state.isOpenAddModel })),
  setIsOpenEditModel: () =>
    set((state) => ({ isOpenEditModel: !state.isOpenEditModel })),
  CloseAllModal: () =>
    set(() => ({ isOpenAddModel: false, isOpenEditModel: false })),
}));
