import { create } from 'zustand';

type countStoreType = {
  count: number;
};

const useStore = create<countStoreType>((set) => ({
  count: 0,
  add: () => set((prevState) => ({ count: prevState.count + 1 })),
}));

export default useStore;
