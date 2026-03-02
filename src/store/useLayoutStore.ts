import {create} from "zustand";

interface LayoutState {
    layout: any[];
    selectedId: string | null;
    setLayout: (newLayout: any[]) => void;
    setSelectedId: (id: string | null) => void;
}

export const useLayoutStore = create<LayoutState>((set) => ({
    layout: [], selectedId: null,
    setLayout: (newLayout) => set({layout: newLayout}),
    setSelectedId: (id) => set({selectedId: id}),
}));