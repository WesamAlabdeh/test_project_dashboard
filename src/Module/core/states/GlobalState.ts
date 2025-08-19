import { create } from 'zustand';
import { getCSSVariable } from '../utils/document/getCSSVariable';

interface GlobalState {
  primaryColor: string;
  bgColor: string;
  textColor: string;
  placeholderColor: string;
}

interface ModelState {
  globalState: GlobalState;
  setGlobalState: (data: Partial<GlobalState>) => void;
  refreshCSSVariables: () => void;
}

export const useGlobalState = create<ModelState>((set) => ({
  globalState: {
    primaryColor: '', // Initialize with empty string
    bgColor: '',
    textColor: '',
    placeholderColor: '',
  },
  setGlobalState: (data) =>
    set((state) => ({ globalState: { ...state.globalState, ...data } })),
  refreshCSSVariables: () =>
    set((state) => ({
      globalState: {
        ...state.globalState,
        primaryColor: getCSSVariable('primary'),
        bgColor: getCSSVariable('bg'),
        textColor: getCSSVariable('text'),
        placeholderColor: getCSSVariable('placeholder'),
      },
    })),
}));
