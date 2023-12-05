import { createWithEqualityFn } from "zustand/traditional";

type AppState = {
  selectedBlock: {
    x: Number;
    y: Number;
  };
};

const useAppStore = createWithEqualityFn<AppState>((set) => ({
  selectedBlock: { x: 0, y: 0 },
}));

export default useAppStore;
