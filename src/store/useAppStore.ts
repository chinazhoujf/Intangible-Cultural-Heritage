import { create } from 'zustand'

type AppState = {
  currentSection: string
  favorites: string[]
  aiOpen: boolean
  aiCraftId: string | null
  setSection: (id: string) => void
  toggleFavorite: (id: string) => void
  openAI: (craftId: string) => void
  closeAI: () => void
}

export const useAppStore = create<AppState>((set) => ({
  currentSection: 'cover',
  favorites: [],
  aiOpen: false,
  aiCraftId: null,
  setSection: (id) => set({ currentSection: id }),
  toggleFavorite: (id) =>
    set((s) => ({
      favorites: s.favorites.includes(id)
        ? s.favorites.filter((x) => x !== id)
        : [...s.favorites, id],
    })),
  openAI: (craftId) => set({ aiOpen: true, aiCraftId: craftId }),
  closeAI: () => set({ aiOpen: false, aiCraftId: null }),
}))
