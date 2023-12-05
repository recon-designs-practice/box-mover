import { create } from "zustand";

export type State = {
  selectedBlock: {
    x: number;
    y: number;
  };
};

type Actions = {
  updateBlock: (selectedBlock: {
    x: State["selectedBlock"]["x"];
    y: State["selectedBlock"]["y"];
  }) => void;
};

const useBlockStore = create<State & Actions>((set) => ({
  selectedBlock: { x: 0, y: 1 },
  updateBlock: (newBlock) => set(() => ({ selectedBlock: newBlock })),
}));

export default useBlockStore;
