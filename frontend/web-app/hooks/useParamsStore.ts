import { create } from "zustand";
import { createWithEqualityFn } from "zustand/traditional";

type State = {
  pageSize: number;
  pageNumber: number;
  pageCount: number;
  searchTerm: string;
  searchValue: string;
  orderBy?: string;
  filterBy: string;
};

type Actions = {
  setParams: (params: Partial<State>) => void;
  reset: () => void;
  setSearchValue: (searchValue: string) => void;
};

const initialState: State = {
  pageSize: 12,
  pageNumber: 1,
  pageCount: 1,
  searchTerm: "",
  searchValue: "",
  orderBy: "endingSoon",
  filterBy: "live",
};

export const useParamsStore = createWithEqualityFn<State & Actions>((set) => ({
  ...initialState,
  setParams: (params: Partial<State>) =>
    set((state) => {
      if (params.pageNumber) {
        return { ...state, pageNumber: params.pageNumber };
      } else {
        return { ...state, ...params, pageNumber: 1 };
      }
    }),
  reset: () => set(initialState),
  setSearchValue: (searchValue: string) => set({ searchValue }),
}));
