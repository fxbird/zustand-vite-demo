import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type UserState = {
  username: string | null
  setUsername: (name: string) => void
  logout: () => void
}

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      username: null,
      setUsername: (name) => set({ username: name }),
      logout: () => set({ username: null }),
    }),
    { name: 'user-storage' }
  )
)
