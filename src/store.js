import { create } from "zustand";

const useBlockStore = create((set) => ({
  selectedBlock: { x: 0, y: 1 },
  updateBlock: (newBlock) => set(() => ({ selectedBlock: newBlock }))
}))

export default useBlockStore