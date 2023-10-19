import { create } from 'zustand';

type State = {
  count: number;
};

type Actions = {
  add: (count: number) => void;
};

const useStore = create<State & Actions>((set) => ({
  count: 0,
  add: (count: number) => {
    set(() => ({ count: count + 1 }));
  },
}));

export default useStore;
