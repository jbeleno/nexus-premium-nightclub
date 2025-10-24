import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useReservationStore = create(
  persist(
    (set) => ({
      reservations: [],
      currentReservation: null,

      addReservation: (reservation) =>
        set((state) => ({
          reservations: [...state.reservations, reservation],
          currentReservation: reservation
        })),

      clearCurrentReservation: () =>
        set({ currentReservation: null }),

      getReservationById: (id) => (state) =>
        state.reservations.find((r) => r.id === id)
    }),
    {
      name: 'nexus-reservations'
    }
  )
)

