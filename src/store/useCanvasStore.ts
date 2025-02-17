import { create } from 'zustand';
import { nanoid } from 'nanoid';
import { TextArea } from '../types/TextArea';
import { DEFAULT_TEXT_AREA } from '../utils/constants';

interface CanvasStore {
  textAreas: TextArea[];
  maxZIndex: number;
  addTextArea: () => void;
  updateTextArea: (id: string, updates: Partial<TextArea>) => void;
  deleteTextArea: (id: string) => void;
  bringToFront: (id: string) => void;
  exportNotes: () => void;
}

const loadState = (): { textAreas: TextArea[], maxZIndex: number } => {
  const storedState = localStorage.getItem('canvasState');
  if (storedState) {
    return JSON.parse(storedState);
  }
  return { textAreas: [], maxZIndex: 1 };
};

const saveState = (state: { textAreas: TextArea[], maxZIndex: number }) => {
  localStorage.setItem('canvasState', JSON.stringify(state));
};

export const useCanvasStore = create<CanvasStore>((set) => ({
  ...loadState(),
  addTextArea: () => set((state) => {
    const newZIndex = state.maxZIndex + 1;
    const newTextArea = {
      id: nanoid(),
      ...DEFAULT_TEXT_AREA,
      zIndex: newZIndex
    };
    const newState = {
      textAreas: [...state.textAreas, newTextArea],
      maxZIndex: newZIndex
    };
    saveState(newState);
    return newState;
  }),
  updateTextArea: (id, updates) => set((state) => {
    const newState = {
      textAreas: state.textAreas.map((area) =>
        area.id === id ? { ...area, ...updates } : area
      ),
      maxZIndex: state.maxZIndex
    };
    saveState(newState);
    return newState;
  }),
  deleteTextArea: (id) => set((state) => {
    const newState = {
      textAreas: state.textAreas.filter((area) => area.id !== id),
      maxZIndex: state.maxZIndex
    };
    saveState(newState);
    return newState;
  }),
  bringToFront: (id) => set((state) => {
    const newZIndex = state.maxZIndex + 1;
    const newState = {
      textAreas: state.textAreas.map((area) =>
        area.id === id ? { ...area, zIndex: newZIndex } : area
      ),
      maxZIndex: newZIndex
    };
    saveState(newState);
    return newState;
  }),
  exportNotes: () => {
    const state = useCanvasStore.getState();
    const jsonContent = JSON.stringify(state.textAreas, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'notes.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}));